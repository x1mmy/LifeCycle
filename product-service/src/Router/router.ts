import express, { Request, Response } from "express";
import { CreateItem } from "../Controller/createItem";
import { DeleteItem } from "../Controller/deleteItem";

const router = express.Router();

//The ThunderClient address is http://localhost:3000/product

router.get("/healthcheck", (req: Request, res: Response) => {
    res.status(200).json({
        health: "OK",
    });
});

router.post("/createItem", CreateItem);
router.delete("/deleteItem", DeleteItem);

export { router as ProductRouter };
