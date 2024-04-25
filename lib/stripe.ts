import Stripe from 'stripe'
export const stripe = new Stripe(process.env.STRIPE_SK_KEY as string, {
  apiVersion: '2023-10-16',
  appInfo: {
    name: 'bazaar',
    url: 'http://localhost:3000/'
  }
})