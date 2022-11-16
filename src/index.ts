import express, { Express, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5500;

app.get('/', (_, res: Response) => {
  res.status(200).json({ message: 'Hello, world!' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
