window.addEventListener('load', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const primaryNav = document.querySelector('#primary-nav');
  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    primaryNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        primaryNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      const shortText = contactForm.querySelector('#short-text');
      const email = contactForm.querySelector('#email');
      if (shortText && !shortText.value.trim()) {
        shortText.focus();
        return;
      }
      if (email && !email.value.includes('@')) {
        email.focus();
        return;
      }
      window.alert('הטופס נשלח בהצלחה');
      contactForm.reset();
    });
  }
  const scanThumbnail = document.querySelector('.scan-thumbnail');
  if (scanThumbnail) {
    window.setTimeout(() => {
      scanThumbnail.classList.add('animate');
    }, 400);
  }
});