const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const stripeController = async (req, res) => {
  console.log(req.body);
  res.send('stripe route');
};

module.exports = stripeController;