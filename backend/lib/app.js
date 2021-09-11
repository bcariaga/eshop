import express from 'express';
import cors from 'cors';
import productsRouter from './routes/products.routes.js';

const app = express();
const port = process.env.PORT || 4001;
app.use(cors); // TODO: configure this!
app.use('/items', productsRouter);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
