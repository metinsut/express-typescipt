import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.json({ name: 'John Doe' });
});

app.listen(port);
