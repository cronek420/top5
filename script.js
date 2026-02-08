// global configuration object
let siteConfig = null;

// Fetch and apply configuration
async function loadConfig() {
    try {
        const response = await fetch('config.json');
        siteConfig = await response.json();
        applyConfig();
    } catch (error) {
        console.warn('config.json not found or invalid. Using default values.');
    }
}

function applyConfig() {
    if (!siteConfig) return;

    // Update contact info in footers or dedicated elements
    const emailEls = document.querySelectorAll('.contact-email');
    emailEls.forEach(el => {
        el.textContent = siteConfig.BUSINESS_CONFIG.CONTACT_EMAIL;
        if (el.tagName === 'A') el.href = `mailto:${siteConfig.BUSINESS_CONFIG.CONTACT_EMAIL}`;
    });

    const phoneEls = document.querySelectorAll('.contact-phone');
    phoneEls.forEach(el => {
        el.textContent = siteConfig.BUSINESS_CONFIG.CONTACT_PHONE;
        if (el.tagName === 'A') el.href = `tel:${siteConfig.BUSINESS_CONFIG.CONTACT_PHONE}`;
    });

    const bizEls = document.querySelectorAll('.business-name');
    bizEls.forEach(el => el.textContent = siteConfig.BUSINESS_CONFIG.COMPANY_NAME);

    const founderEls = document.querySelectorAll('.founder-name');
    founderEls.forEach(el => {
        el.textContent = `${siteConfig.BUSINESS_CONFIG.FOUNDER_NAME} | ${siteConfig.BUSINESS_CONFIG.FOUNDER_TITLE}`;
    });
}

document.addEventListener('DOMContentLoaded', loadConfig);

// Store current checkout data
let currentCheckout = {
    productName: '',
    price: 0,
    priceInCents: 0
};

// Scroll to products section or redirect if on another page
function scrollToProducts() {
    const productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        window.location.href = 'index.html#products';
    }
}

// Open checkout modal with Stripe
function openCheckout(productName, price) {
    currentCheckout.productName = productName;
    currentCheckout.price = price;
    currentCheckout.priceInCents = price * 100;

    document.getElementById('checkoutTitle').textContent = `Purchase: ${productName}`;
    document.getElementById('checkoutPrice').textContent = `Price: $${price.toLocaleString()}`;
    document.getElementById('checkoutModal').style.display = 'block';

    // Initialize Stripe element if not already done
    if (typeof stripe !== 'undefined' && stripe && !window.stripeElementInitialized) {
        initializeStripeElement();
        window.stripeElementInitialized = true;
    }
}

// Close checkout modal
function closeCheckout() {
    document.getElementById('checkoutModal').style.display = 'none';
}

// Complete checkout
async function completeCheckout() {
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Processing...';

    try {
        // In a real implementation, you would:
        // 1. Call your backend to create a Stripe payment intent
        // 2. Confirm the payment with the client secret
        // 3. Handle the response

        // For now, show a success message
        alert(`Ready to process payment for ${currentCheckout.productName}\nAmount: $${currentCheckout.price}\n\nStripe integration requires:\n1. Backend API endpoint\n2. Stripe API keys\n3. Payment intent creation`);

        closeCheckout();
    } catch (error) {
        alert('Payment failed: ' + error.message);
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Complete Purchase';
    }
}

// Open questionnaire modal
function openQuestionnaireModal() {
    document.getElementById('questionnaireModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close questionnaire modal
function closeQuestionnaireModal() {
    document.getElementById('questionnaireModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Submit questionnaire
function submitQuestionnaire(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // Get product selections
    const productInputs = document.getElementsByName('products');
    const selectedProducts = [];
    productInputs.forEach(input => {
        if (input.checked) {
            selectedProducts.push(input.value);
        }
    });
    data.products = selectedProducts.length > 0 ? selectedProducts.join(', ') : 'Not specified';

    console.log('Questionnaire Data Collected:', data);

    // Create summary email
    const emailBody = `
╔════════════════════════════════════════╗
║  NEW LEAD - SETUP QUESTIONNAIRE        ║
╚════════════════════════════════════════╝

PERSONAL INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name:     ${data.fullName}
Email:    ${data.email}
Phone:    ${data.phone}

COMPANY INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Company:      ${data.companyName}
Website:      ${data.website || 'Not provided'}
Industry:     ${data.industry}
Size:         ${data.companySize}

PRODUCT INTERESTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Products:     ${data.products}
Budget:       ${data.budget}

PREFERENCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Implementation: ${data.implementation}
Support:        ${data.support}

ADDITIONAL INFO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Challenge:  ${data.challenge || 'Not provided'}
Referral:   ${data.referral || 'Not provided'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted: ${new Date().toLocaleString()}
`;

    console.log(emailBody);

    // Show success message
    const successMessage = `
✅ Strategy Session Initiated!

We received your information and will reach out within 24 hours.

📧 Check your email (${data.email}) for our confirmation.

In the meantime, feel free to explore our systems or reach out via email.
    `;

    alert(successMessage);

    // In production, this would send to your backend/email service
    // For now, log to console for verification

    closeQuestionnaireModal();
    event.target.reset();
}

// Initialize Stripe Element (placeholder)
function initializeStripeElement() {
    // This requires Stripe.js initialization with your publishable key
    // const elements = stripe.elements();
    // const cardElement = elements.create('card');
    // cardElement.mount('#stripe-element');
}

// Click outside modal to close
window.onclick = function (event) {
    const checkoutModal = document.getElementById('checkoutModal');
    const questionnaireModal = document.getElementById('questionnaireModal');

    if (event.target === checkoutModal) {
        closeCheckout();
    }
    if (event.target === questionnaireModal) {
        closeQuestionnaireModal();
    }
}

// Reveal Animations
document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to reveal
    const revealElements = document.querySelectorAll('.product-card, .testimonial, .timeline-item, .faq-item, section h2');
    revealElements.forEach(el => {
        el.classList.add('reveal-hidden');
        observer.observe(el);
    });
});
