let siteConfig = null;

async function loadConfig() {
  try {
    const response = await fetch('config.json');
    siteConfig = await response.json();
    applyConfig();
  } catch (error) {
    console.warn('config.json unavailable; using page defaults.');
    applyBrandCompatibility();
  }
}

function applyConfig() {
  const business = siteConfig?.BUSINESS_CONFIG || {};
  document.querySelectorAll('.business-name').forEach(el => {
    el.textContent = business.COMPANY_NAME || '9Design Agents';
  });
  document.querySelectorAll('.founder-name').forEach(el => {
    el.textContent = business.FOUNDER_NAME ? `${business.FOUNDER_NAME} | ${business.FOUNDER_TITLE || 'Founder'}` : '';
  });

  document.querySelectorAll('.contact-email').forEach(el => {
    if (!business.CONTACT_EMAIL) {
      el.closest('p')?.remove();
      return;
    }
    el.textContent = business.CONTACT_EMAIL;
    if (el.tagName === 'A') el.href = `mailto:${business.CONTACT_EMAIL}`;
  });

  document.querySelectorAll('.contact-phone').forEach(el => {
    if (!business.CONTACT_PHONE) {
      el.closest('p')?.remove();
      return;
    }
    el.textContent = business.CONTACT_PHONE;
    if (el.tagName === 'A') el.href = `tel:${business.CONTACT_PHONE}`;
  });

  applyBrandCompatibility();
}

function applyBrandCompatibility() {
  document.title = document.title
    .replaceAll('AutomationHub', '9Design Agents')
    .replaceAll('Lexicon Solutions', '9Design');

  document.querySelectorAll('.logo').forEach(el => {
    el.textContent = '9Design Agents';
    if (el.tagName === 'A') el.setAttribute('aria-label', '9Design Agents home');
  });

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    if (!node.nodeValue) return;
    node.nodeValue = node.nodeValue
      .replaceAll('AutomationHub', '9Design Agents')
      .replaceAll('Lexicon Solutions', '9Design')
      .replaceAll('Content Parasite', 'Content Intelligence Engine')
      .replaceAll('Hiring Autopilot', 'Hiring Workflow Assistant');
  });

  document.querySelectorAll('a[href^="mailto:support@automationhub.com"], a[href^="tel:+1-555-123-4567"]').forEach(el => {
    el.closest('p')?.remove();
  });
}

document.addEventListener('DOMContentLoaded', loadConfig);

function scrollToProducts() {
  const productsSection = document.getElementById('products');
  if (productsSection) productsSection.scrollIntoView({ behavior: 'smooth' });
  else window.location.href = 'index.html#products';
}

function openQuestionnaireModal() {
  const modal = document.getElementById('questionnaireModal');
  if (!modal) return;
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeQuestionnaireModal() {
  const modal = document.getElementById('questionnaireModal');
  if (!modal) return;
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

function closeCheckout() {
  const modal = document.getElementById('checkoutModal');
  if (modal) modal.style.display = 'none';
}

function submitQuestionnaire(event) {
  event.preventDefault();
  alert('This inquiry form is not connected yet, so nothing was submitted. We are connecting the 9Design contact channel next.');
}

window.onclick = function (event) {
  const checkoutModal = document.getElementById('checkoutModal');
  const questionnaireModal = document.getElementById('questionnaireModal');
  if (checkoutModal && event.target === checkoutModal) closeCheckout();
  if (questionnaireModal && event.target === questionnaireModal) closeQuestionnaireModal();
};

document.addEventListener('DOMContentLoaded', function () {
  const revealElements = document.querySelectorAll('.product-card, .testimonial, .timeline-item, .faq-item, section h2, .reveal-hidden');
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('reveal-visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  revealElements.forEach(el => {
    el.classList.add('reveal-hidden');
    observer.observe(el);
  });
});
