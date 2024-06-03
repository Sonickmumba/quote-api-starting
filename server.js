const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', (req, res, next) => {
  const randomQuote = {quote: getRandomElement(quotes)};
  res.send(randomQuote);
})

// app.get('/api/quotes', (req, res, next) => {
//   const person = req.query.person;
//   const filteredArray = quotes.filter((quote) =>quote.person === person)
//   if (person) {
//     res.send({quotes: filteredArray})
//   } else {
//     res.send({quotes: quotes});
//   }
// })

// app.post('/api/quotes', (req, res, next) => {
//   const {quote, person } = req.query;
//   if (!quote || !person) {
//     res.status(400).send('Query properties do not exit');
//   } else {
//     quotes.push(req.query)
//     res.send({quote: req.query})
//   }
// })

app.listen(PORT, () => {
  console.log(`Listening to Port ${PORT}`)
})