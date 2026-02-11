/**
 * Stripe Integration Module
 * 
 * This module handles Stripe payment processing
 * 
 * To enable Stripe payments:
 * 1. Replace YOUR_PUBLISHABLE_KEY with your actual Stripe publishable key
 * 2. Set up a backend endpoint to handle payment intents
 * 3. Implement the payment processing logic below
 */

// Initialize Stripe (replace with your publishable key)
const stripePublishableKey = pk_live_51RCVaCP36JQgLLd8SCHHtPzuSO2s6IuDXxxKLuJj9tpUQQLTiJfrtYosu9ih5M6KOI1D6VJ32Jw5p6G82bx00O2i00PI19OGmD;
let stripe = null;

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    if (stripePublishableKey && stripePublishableKey.includes('pk_')) {
        stripe = Stripe(stripePublishableKey);
    } else {
        console.log('Stripe not configured. Add your publishable key to enable payments.');
    }
});

/**
 * Create Payment Intent on Backend
 * This function should call your backend API
 */
async function createPaymentIntent(amount, productName) {
    try {
        const response = await fetch('/api/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: amount, // amount in cents
                productName: productName,
                description: `Purchase of ${productName}`
            })
        });

        if (!response.ok) {
            throw new Error('Failed to create payment intent');
        }

        const data = await response.json();
        return data.clientSecret;
    } catch (error) {
        console.error('Error creating payment intent:', error);
        throw error;
    }
}

/**
 * Confirm Payment with Stripe
 */
async function confirmPayment(clientSecret, elements, cardElement) {
    try {
        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,
                billing_details: {
                    // Add billing details from form if needed
                }
            }
        });

        if (result.error) {
            // Show error to customer
            console.error('Payment error:', result.error);
            return false;
        } else if (result.paymentIntent.status === 'succeeded') {
            // Payment successful
            console.log('Payment succeeded:', result.paymentIntent);
            return true;
        }
    } catch (error) {
        console.error('Confirmation error:', error);
        return false;
    }
}

/**
 * Backend API Example (Node.js/Express)
 * 
 * Install: npm install stripe express body-parser
 * 
 * const stripe = require('stripe')('sk_test_YOUR_SECRET_KEY');
 * const express = require('express');
 * const bodyParser = require('body-parser');
 * 
 * const app = express();
 * app.use(bodyParser.json());
 * 
 * app.post('/api/create-payment-intent', async (req, res) => {
 *   try {
 *     const { amount, productName, description } = req.body;
 *     
 *     const paymentIntent = await stripe.paymentIntents.create({
 *       amount: amount,
 *       currency: 'usd',
 *       metadata: {
 *         productName: productName
 *       },
 *       description: description
 *     });
 *     
 *     res.json({ clientSecret: paymentIntent.client_secret });
 *   } catch (error) {
 *     res.status(400).json({ error: error.message });
 *   }
 * });
 * 
 * // Webhook for payment confirmation
 * const endpointSecret = 'whsec_test_YOUR_WEBHOOK_SECRET';
 * 
 * app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
 *   const sig = req.headers['stripe-signature'];
 *   
 *   let event;
 *   try {
 *     event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
 *   } catch (err) {
 *     res.status(400).send(`Webhook Error: ${err.message}`);
 *     return;
 *   }
 *   
 *   switch (event.type) {
 *     case 'payment_intent.succeeded':
 *       const paymentIntent = event.data.object;
 *       console.log('PaymentIntent succeeded:', paymentIntent.id);
 *       // TODO: Handle successful payment (create order, send email, etc.)
 *       break;
 *     case 'payment_intent.payment_failed':
 *       const failedIntent = event.data.object;
 *       console.log('PaymentIntent failed:', failedIntent.id);
 *       // TODO: Handle failed payment
 *       break;
 *   }
 *   
 *   res.json({received: true});
 * });
 * 
 * app.listen(3000, () => {
 *   console.log('Server running on port 3000');
 * });
 */

/**
 * Database Schema Example (MongoDB/Mongoose)
 * 
 * const customerSchema = new Schema({
 *   email: String,
 *   fullName: String,
 *   phone: String,
 *   companyName: String,
 *   website: String,
 *   industry: String,
 *   companySize: String,
 *   selectedProducts: [String],
 *   budget: String,
 *   implementation: String,
 *   support: String,
 *   createdAt: { type: Date, default: Date.now },
 *   stripeCustomerId: String,
 *   lastPurchase: Date
 * });
 * 
 * const orderSchema = new Schema({
 *   orderId: String,
 *   customerId: Schema.Types.ObjectId,
 *   productName: String,
 *   amount: Number,
 *   currency: String,
 *   stripePaymentIntentId: String,
 *   status: String, // 'pending', 'succeeded', 'failed'
 *   createdAt: { type: Date, default: Date.now },
 *   completedAt: Date
 * });
 */
