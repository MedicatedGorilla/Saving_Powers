#!/usr/bin/env python3
"""Download the original site's document archive and switch all PDF links to local copies.
Run on a machine with internet access before deploying. Python 3 standard library only.
"""
from pathlib import Path
import argparse, json, re, time, urllib.request, urllib.error
from html import escape

ROOT=Path(__file__).resolve().parents[1]
MANIFEST=ROOT/'documents-manifest.json'
HTML=ROOT/'index.html'

def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--dry-run',action='store_true',help='Show which PDFs would be downloaded')
    parser.add_argument('--timeout',type=int,default=75)
    args=parser.parse_args()
    docs=json.loads(MANIFEST.read_text())
    page=HTML.read_text(encoding='utf-8')
    success=failed=0
    for idx,doc in enumerate(docs,1):
        target=ROOT/doc['local_path']
        url=doc['original_url']
        print(f'[{idx}/{len(docs)}] {doc["title"]}')
        if args.dry_run:continue
        try:
            if not target.exists() or target.stat().st_size < 100:
                target.parent.mkdir(parents=True,exist_ok=True)
                request=urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0 (compatible; SavingPowersArchive/1.0)'})
                with urllib.request.urlopen(request,timeout=args.timeout) as response:
                    data=response.read()
                if not data.startswith(b'%PDF-'):
                    raise ValueError('Response is not a PDF (check original source link)')
                target.write_bytes(data)
            else:
                if not target.open('rb').read(5)==b'%PDF-':
                    raise ValueError('Existing file is not a PDF')
            # Replace only links whose local files are really present.
            for original in (url,escape(url,quote=True)):
                page=page.replace('href="'+original+'"','href="'+doc['local_path']+'"')
            doc['status']='local'
            success+=1
            print(f'  saved {target.relative_to(ROOT)} ({target.stat().st_size:,} bytes)')
        except Exception as exc:
            doc['status']='external'
            failed+=1
            print(f'  FAILED — keeping original link: {exc}')
    if not args.dry_run:
        if success == len(docs):
            page=page.replace('Documents currently open from the original site until their PDFs are copied into this project.', 'PDFs in this archive are hosted directly on SavingPowers.com.')
        else:
            page=page.replace('Documents currently open from the original site until their PDFs are copied into this project.', 'Documents hosted here open locally; remaining documents open from the original site while copies are obtained.')
        HTML.write_text(page,encoding='utf-8')
        MANIFEST.write_text(json.dumps(docs,indent=2,ensure_ascii=False)+'\n')
    print(f'Finished: {success} local PDFs; {failed} still on original website.' if not args.dry_run else f'{len(docs)} PDFs to download.')
    if failed:print('Re-run this script later to retry. The webpage keeps original links for failed files.')

if __name__=='__main__':main()
