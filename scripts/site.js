
    // Progressive mobile disclosure: keep full content reachable without heavy scrolling.
    (() => {
      const mobile = window.matchMedia('(max-width: 620px)');
      const timeline = document.getElementById('timeline-entries');
      const button = document.getElementById('timeline-toggle');
      const gallery = document.getElementById('more-gallery-photos');
      const archive = document.querySelectorAll('.archive-group');
      let first = true;
      function apply() {
        const small = mobile.matches;
        if (timeline && button) {
          if (small && first) { timeline.classList.add('is-condensed'); }
          if (!small) timeline.classList.remove('is-condensed');
          button.hidden = !small;
          button.setAttribute('aria-expanded',String(!timeline.classList.contains('is-condensed')));
          button.textContent = timeline.classList.contains('is-condensed') ? 'Show full timeline' : 'Show fewer milestones';
        }
        if (gallery && first) gallery.open = !small;
        if (small && first) archive.forEach(group=>group.open=false);
        first = false;
      }
      if (button && timeline) button.addEventListener('click', () => {
        const collapsed = timeline.classList.toggle('is-condensed');
        button.setAttribute('aria-expanded', String(!collapsed));
        button.textContent = collapsed ? 'Show full timeline' : 'Show fewer milestones';
        // Older milestones appear above the button, so move the viewport up on
        // expansion; otherwise mobile scroll anchoring makes it seem unchanged.
        if (!collapsed) {
          const firstMilestone = timeline.querySelector('article');
          if (firstMilestone) firstMilestone.scrollIntoView({
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
            block: 'start'
          });
        }
      });
      apply();
      mobile.addEventListener('change', apply);
    })();

  // Filter the existing static document archive without a framework or backend.
  (() => {
    const input = document.getElementById('document-search');
    const status = document.getElementById('document-search-status');
    if (!input || !status) return;
    const groups = [...document.querySelectorAll('.archive-group')];
    input.addEventListener('input', () => {
      const query = input.value.trim().toLocaleLowerCase();
      let total = 0;
      for (const group of groups) {
        let found = 0;
        for (const entry of group.querySelectorAll('.archive-entry')) {
          const visible = entry.dataset.search.includes(query);
          entry.hidden = !visible;
          if (visible) found++;
        }
        group.hidden = found === 0;
        if (query && found > 0) group.open = true;
        total += found;
      }
      status.textContent = `${total} document${total === 1 ? '' : 's'}${query ? ' matching your search' : ''}`;
    });
  })();

  // Accessible gallery viewer: native dialog, arrow/Escape keys, mobile swipe.
  (() => {
    const dialog = document.getElementById('site-lightbox');
    if (!dialog || typeof dialog.showModal !== 'function') return;

    const picture = dialog.querySelector('.site-lightbox-image');
    const caption = dialog.querySelector('.site-lightbox-caption');
    const position = dialog.querySelector('.site-lightbox-count');
    const closeButton = dialog.querySelector('.site-lightbox-close');
    const previous = dialog.querySelector('[data-viewer-prev]');
    const next = dialog.querySelector('[data-viewer-next]');
    const groups = { landscape: [], plans: [], flyers: [] };
    let group = 'landscape';
    let index = 0;
    let lastTrigger = null;
    let previousOverflow = '';
    let touchStart = null;

    // Turn the intro photo and both site-plan graphics into keyboard-usable links.
    // If JavaScript is unavailable, their original static images remain visible.
    document.querySelectorAll('.photo-card > img, .plan-figure > img').forEach(img => {
      const anchor = document.createElement('a');
      anchor.href = img.getAttribute('src');
      anchor.setAttribute('aria-label', 'Enlarge image: ' + img.alt);
      anchor.dataset.viewerLink = '';
      img.parentNode.insertBefore(anchor, img);
      anchor.appendChild(img);
    });

    const links = document.querySelectorAll(
      '.photo-card a[data-viewer-link], .landscape-photo a[href], ' +
      '.plan-figure a[data-viewer-link], .poster-grid a[href]'
    );
    links.forEach(link => {
      const img = link.querySelector('img');
      if (!img) return;
      const gallery = link.closest('.poster-grid') ? 'flyers' :
        link.closest('.plan-figure') ? 'plans' : 'landscape';
      const figure = link.closest('figure');
      const figureCaption = figure && figure.querySelector('figcaption');
      const item = {
        src: link.href,
        alt: img.alt || 'Gallery image',
        caption: figureCaption ? figureCaption.textContent.trim() : img.alt,
        link: link
      };
      groups[gallery].push(item);
      link.setAttribute('aria-haspopup', 'dialog');
      link.addEventListener('click', event => {
        // Preserve normal browser link behavior for modifier-clicks.
        if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        group = gallery;
        index = groups[gallery].indexOf(item);
        lastTrigger = link;
        showImage();
        previousOverflow = document.body.style.overflow;
        dialog.showModal();
        document.body.style.overflow = 'hidden';
        closeButton.focus();
      });
    });

    function showImage() {
      const items = groups[group];
      if (!items.length) return;
      const item = items[index];
      picture.src = item.src;
      picture.alt = item.alt;
      caption.textContent = item.caption;
      position.textContent = (index + 1) + ' of ' + items.length;
      previous.hidden = next.hidden = items.length < 2;
    }

    function navigate(delta) {
      const length = groups[group].length;
      if (!length) return;
      index = (index + delta + length) % length;
      showImage();
    }

    closeButton.addEventListener('click', () => dialog.close());
    previous.addEventListener('click', () => navigate(-1));
    next.addEventListener('click', () => navigate(1));
    dialog.addEventListener('click', event => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener('close', () => {
      document.body.style.overflow = previousOverflow;
      if (lastTrigger && lastTrigger.isConnected) lastTrigger.focus();
    });
    document.addEventListener('keydown', event => {
      if (!dialog.open) return;
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        navigate(event.key === 'ArrowRight' ? 1 : -1);
      }
      // Escape is handled by the native <dialog> element.
    });
    dialog.addEventListener('touchstart', event => {
      if (event.touches.length !== 1) { touchStart = null; return; }
      touchStart = { x: event.touches[0].clientX, y: event.touches[0].clientY };
    }, { passive: true });
    dialog.addEventListener('touchend', event => {
      if (!touchStart || !event.changedTouches.length) return;
      const dx = event.changedTouches[0].clientX - touchStart.x;
      const dy = event.changedTouches[0].clientY - touchStart.y;
      touchStart = null;
      if (Math.abs(dx) >= 55 && Math.abs(dx) > Math.abs(dy) * 1.4) navigate(dx < 0 ? 1 : -1);
    }, { passive: true });
  })();


  // Show the return-to-top link only after visitors have scrolled down.
  (() => {
    const link = document.getElementById('back-to-top');
    if (!link) return;
    const update = () => link.classList.toggle('is-visible', window.scrollY > 650);
    window.addEventListener('scroll', update, { passive: true });
    update();
  })();



// Preserve deep links to legacy homepage sections when the multi-page site launches.
// Only runs on the homepage; other pages contain their own native section anchors.
(() => {
  if (document.body.dataset.sitePage !== "home" || !location.hash) return;
  const fragments = {
    "community-news":"community.html",
    "issue":"northside.html", "land-use":"northside.html",
    "photos":"northside.html", "plan":"northside.html",
    "timeline":"timeline.html", "record":"documents.html",
    "campaign":"get-involved.html", "yard-signs":"get-involved.html",
    "help":"get-involved.html"
  };
  const id = location.hash.slice(1);
  if (Object.prototype.hasOwnProperty.call(fragments, id)) {
    location.replace(fragments[id] + location.hash);
  }
})();
