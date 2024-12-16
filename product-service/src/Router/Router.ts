import express, {Request, Response} from "express";
import { Testnode } from "../Contoller/Testcontroller";

const router = express.Router();

router.get("/healthcheck", (req: Request, res: Response) => {
    res.status(200).json({
        health: "OK",
    });
});

router.post("/test", Testnode);

export {router as ProductRouter};
