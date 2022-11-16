import express, { Express } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5500;

app.get('/', (req, res) => {
  res.status(200).json({ message: 'succes' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
