import express, { Request, Response } from "express";
import { CreateItem } from "../Contoller/createItem";

const router = express.Router();

router.get("/healthcheck", (req: Request, res: Response) => {
    res.status(200).json({
        health: "OK",
    });
});

router.post("/test", CreateItem);

export { router as ProductRouter };
