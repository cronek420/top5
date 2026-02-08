# AutomationHub - 5 Products Sales Website

A professional website to sell 5 high-ROI automation solutions with Stripe integration and customer questionnaire.

## Products Included

1. **Deep Personalization System** ($1,500-$5,000)
   - AI-powered customized emails at scale
   - Thousands of personalized outreach campaigns
   - Proven copywriting formula integration

2. **Search Intent Lead Scraper** ($1,500-$5,000)
   - Scrapes leads with specific pain points
   - Extracts hiring managers from job listings
   - Auto-populated Google Sheets integration

3. **YouTube Parasite + Content Improvement System** ($2,000-$5,000)
   - Scrapes competitor YouTube content
   - AI identifies content gaps
   - Auto-generates improved content versions

4. **Automated Newsletter Production System** ($1,500-$10,000)
   - Scrapes trending Reddit posts daily
   - AI filters content by relevance
   - Email/SMS/blog-ready content

5. **Copy & Paste Automatic Hiring System** ($2,000-$7,500)
   - Automated candidate screening
   - CRM-integrated hiring pipeline
   - Email automation for outreach

## Features

✅ **Professional Landing Page** - Hero section with clear value proposition
✅ **Product Showcase** - All 5 products with features and pain points
✅ **Stripe Integration** - Ready for payment processing
✅ **Questionnaire Form** - Collects customer and company information
✅ **Responsive Design** - Mobile-friendly layout
✅ **Benefits Section** - Highlights why customers should choose these automations
✅ **CTAs Throughout** - Multiple call-to-action buttons

## Files

- `index.html` - Main website structure and content
- `styles.css` - Professional styling with gradients and animations
- `script.js` - Questionnaire and modal management
- `stripe.js` - Stripe payment integration setup
- `README.md` - This file

## Setup Instructions

### 1. Basic Setup (No Payment Processing)
Simply open `index.html` in a web browser. All features work except actual payment processing.

### 2. Enable Stripe Payments

#### Step 1: Create Stripe Account
- Go to https://stripe.com
- Sign up for a free account
- Get your API keys from the dashboard

#### Step 2: Update Stripe Configuration
Edit `stripe.js` and replace:
```javascript
const stripePublishableKey = 'pk_test_YOUR_PUBLISHABLE_KEY_HERE';
```

#### Step 3: Set Up Backend API
Create a backend endpoint (Node.js/Express example):

```javascript
const stripe = require('stripe')('sk_test_YOUR_SECRET_KEY');
const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount, productName } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
      metadata: { productName }
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(3000, () => console.log('Server running'));
```

#### Step 4: Set Up Webhooks
Configure Stripe webhook in dashboard to `https://yoursite.com/webhook` to handle payment confirmations.

### 3. Collect Customer Data

The questionnaire automatically collects:
- Full name, email, phone
- Company name, website, industry, size
- Product interests
- Budget range
- Implementation preference
- Support requirements
- Custom challenges

All data can be:
- Sent to your email (requires backend)
- Stored in a database
- Integrated with CRM
- Used for follow-up campaigns

## Questionnaire Data Structure

```javascript
{
  fullName: "John Doe",
  email: "john@example.com",
  phone: "555-1234",
  companyName: "Acme Corp",
  website: "https://acme.com",
  industry: "SaaS",
  companySize: "11-50 employees",
  products: "Deep Personalization, Lead Scraper",
  budget: "$5,000-$10,000",
  implementation: "full-service",
  support: "monthly",
  challenge: "We need to generate more qualified leads",
  referral: "Google Search"
}
```

## Pricing Strategy

The pricing tiers are designed to:
- **Capture different market segments** - From startups with $1,500 budgets to enterprises with $10,000+
- **Allow upselling** - Start with fixed price, offer consulting hourly, add monthly retainers
- **Communicate value** - Price reflects the ROI clients will receive (each system solves money-losing problems)

**Price Justification:**
- Deep Personalization: $2,500 avg = recovers costs in 1-2 weeks if it generates just 1 new client
- Lead Scraper: $2,500 avg = recovers costs in 1-2 weeks of qualified leads
- YouTube System: $3,500 avg = saves $500+/week in content creator costs
- Newsletter: $5,000 avg = saves $1,000+/week in content creation
- Hiring System: $4,500 avg = saves 20+ hours/week of recruitment time

## Conversion Optimization

### What Gets People to Buy:
1. **Clear Pain Point Match** - Each product emphasizes the specific problem it solves
2. **Tangible Deliverables** - Customers can see results (emails, leads, content, newsletter)
3. **Urgency** - "Solves," "improves," "automation" = immediate need
4. **Social Proof Ready** - Questionnaire captures data for testimonials
5. **Multiple CTAs** - "Buy Now," "Setup Questionnaire," "Explore Products"
6. **ROI Focus** - Every product mentions revenue impact
7. **Trust Signals** - Professional design, clear pricing, no hidden fees

### Additional Recommendations:
- Add customer testimonials from existing clients
- Include case studies showing specific ROI
- Add live chat for real-time questions
- Implement email follow-up sequence for abandoned questionnaires
- Create FAQ section addressing common objections
- Show timeline: "Setup in 2 weeks, results in 30 days"

## Deployment Options

### Option 1: Vercel (Recommended for Frontend)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
Drag and drop your project folder.

### Option 3: Self-Hosted
- Deploy HTML/CSS/JS to any web server
- Host backend API separately (Heroku, AWS, DigitalOcean)
- Configure custom domain and SSL

## Getting Customer Data

### Method 1: Email Integration
Add to backend and update questionnaire form:
```javascript
const nodemailer = require('nodemailer');
// Send questionnaire data to business email
```

### Method 2: Database Storage
Store questionnaire data in MongoDB or PostgreSQL

### Method 3: CRM Integration
Connect to Zapier, Make.com, or native CRM API

### Method 4: Google Sheets
Automatically append responses to Google Sheet

## Security Considerations

- Never store full credit cards (Stripe handles this)
- Use HTTPS for all customer data
- Validate all form inputs on backend
- Use environment variables for API keys
- Implement rate limiting on payment endpoint
- Add CSRF protection to forms

## Support & Contact

For assistance setting up:
- Stripe documentation: https://stripe.com/docs
- Backend setup help: See `stripe.js` for Node.js example
- Customization: Modify HTML for your specific products/pricing

## Testing

### Test Stripe Cards (Sandbox Mode)
- Success: 4242 4242 4242 4242
- Decline: 4000 0000 0000 0002
- 3D Secure: 4000 0025 0000 3155

## License

Free to modify and distribute for your business.

---

**Ready to start selling automations?**
1. Open `index.html` in browser
2. Fill out test questionnaire
3. Click Buy Now to see payment flow
4. Set up Stripe keys for real payments
5. Deploy and start selling!
