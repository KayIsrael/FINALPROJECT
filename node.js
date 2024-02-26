const express = require('express');
const stripe = require('stripe')('your_secret_key');

const app = express();
const port = 3000;


app.use(express.json());


app.post('/charge', async (req, res) => {
  try {
    
    const charge = await stripe.charges.create({
      amount: req.body.amount,
      currency: 'usd',
      source: req.body.stripeToken,
      description: 'Example charge',
    });

 
    res.send('Payment successful');
  } catch (err) {

    console.error(err);
    res.status(500).send('An error occurred');
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
