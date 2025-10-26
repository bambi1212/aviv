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
      const nameField = contactForm.querySelector('#name');
      const emailField = contactForm.querySelector('#email');
      if (nameField && !nameField.value.trim()) {
        nameField.focus();
        return;
      }
      if (emailField && !emailField.value.includes('@')) {
        emailField.focus();
        return;
      }
      window.alert('form submitted successfully');
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