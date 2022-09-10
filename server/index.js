let express = require('express');
let fs = require('fs');
let bodyParser = require('body-parser');

const app = express();

let jsonParser = bodyParser.json();
/* var urlencodedParser = bodyParser.urlencoded({ extended: false });
 */
app.use(express.static('./public'));

app.get('/good', (req, res) => {
  fs.readFile('./data/catalog.json', 'utf8', (err, data) => {
    res.send(data);
  });
});

app.get('/cart', (req, res) => {
  fs.readFile('./data/cart.json', 'utf8', (err, data) => {
    res.send(data);
    console.log(data);
  });
});

app.post('/cart', jsonParser, (req, res) => {
  fs.readFile('./data/cart.json', 'utf8', (err, data) => {
    const cart = JSON.parse(data);

    const item = req.body;

    cart.push(item);

    fs.writeFile('./data/cart.json', JSON.stringify(cart), (err) => {
      console.log('done');
      res.send('ok');
    });
  });
});

app.delete('/cart', jsonParser, (req, res) => {
  fs.readFile('./data/cart.json', 'utf8', (err, data) => {
    const cart = JSON.parse(data);

    cart.splice(0);

    fs.writeFile('./data/cart.json', JSON.stringify(cart), (err) => {
      console.log('done');
      res.send('ok');
    });
  });
});

app.listen(3000, () => {
  console.log('server is running on port 3000!');
});
