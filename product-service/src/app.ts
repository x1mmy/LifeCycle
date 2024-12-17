import express from 'express';
import { ProductRouter } from './Router/Router';

const app = express();

app.use("/product", ProductRouter)

export {app};