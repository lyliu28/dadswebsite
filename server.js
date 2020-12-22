//server.js
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();
var router = express.Router();

//------stripe----//
const stripe = require('stripe')('sk_test_zhUN0aVtfWRskUPeF6L9yPFo00fLE0uRt3');
app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: req.param.product_name,
          },
          unit_amount: req.param.price,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
  });

  res.json({ id: session.id });
});

//app.listen(4242, () => console.log(`Listening on port ${4242}!`));

//------stripe----//

app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
  res.redirect('test/');
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(port);