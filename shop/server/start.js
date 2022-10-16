let express = require('express');
let fs = require('fs');
let bodyParser = require('body-parser');

const app = express();

let jsonParser = bodyParser.json();
/* var urlencodedParser = bodyParser.urlencoded({ extended: false });
 */
app.use(express.static('./dist'));

const port = process.env.PORT || 3000;

app.get('/api/good', (req, res) => {
  fs.readFile('./server/data/catalog.json', 'utf8', (err, data) => {
    res.send(data);
  });
});

app.get('/api/cart', (req, res) => {
  fs.readFile('./server/data/cart.json', 'utf8', (err, data) => {
    res.send(data);
  });
});

app.post('/api/cart', jsonParser, (req, res) => {
  fs.readFile('./server/data/cart.json', 'utf8', (err, data) => {
    const cart = JSON.parse(data);

    const item = req.body;

    cart.push(item);

    fs.writeFile('./server/data/cart.json', JSON.stringify(cart), (err) => {
      console.log('done');
      res.send('ok');
    });
  });
});

app.delete('/api/cart', jsonParser, (req, res) => {
  fs.readFile('./server/data/cart.json', 'utf8', (err, data) => {
    const cart = JSON.parse(data);

    cart.splice(0);

    fs.writeFile('./server/data/cart.json', JSON.stringify(cart), (err) => {
      console.log('done');
      res.send('ok');
    });
  });
});

app.listen(port, () => {
  console.log('server is running on port 3000!');
});
