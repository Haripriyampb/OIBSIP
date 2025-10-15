document.addEventListener('DOMContentLoaded', () => {
  
  const yEls = document.querySelectorAll('.year');
  yEls.forEach(el => el.textContent = new Date().getFullYear());

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      const action = contactForm.getAttribute('action') || '#';
      if (action === '#' || action.includes('{your-id}')) {
        e.preventDefault();
        const name = document.getElementById('c-name')?.value || 'friend';
        contactForm.reset();
      }
    });
  }
});