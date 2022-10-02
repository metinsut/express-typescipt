import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', function (req: Request, res: Response) {
  res.json({ name: 'John Doe' });
});

app.get('/api', (req: Request, res: Response) => {
  res.json({
    status: 'success',
  });
});

app.listen(port);
