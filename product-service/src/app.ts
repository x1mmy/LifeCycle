import express from 'express';
import { ProductRouter } from './Router/router';

const app = express();

app.use(express.json());
app.use("/product", ProductRouter);

export {app};