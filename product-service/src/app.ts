import express from 'express';
import { ProductRouter } from './Router/router';

const app = express();

app.use("/product", ProductRouter)

export {app};