const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const stripeController = async (req, res) => {
  const { purchase, total_amount, shipping_fee } = req.body;

  // Normally you would get this from your DB or an external API
  // You get the id from the client side and then you can get the product details from your DB
  // For demo purposes, we're using a what comes in from the client
  const calculateOrderAmount = () => {
    return total_amount + shipping_fee;
  };

  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(),
    currency: 'usd',
  });

  console.log(paymentIntent);
  res.json({ clientSecret: paymentIntent.client_secret });
};

module.exports = stripeController;