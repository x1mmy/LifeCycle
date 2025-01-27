import express from 'express';
import { ProductRouter } from './Router/router';
import cors from "cors";
import { corsOptions } from './config/cor-options';

const app = express();

app.use(cors(corsOptions));

app.use(express.json());
app.use("/product", ProductRouter);

export {app};