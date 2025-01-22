import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { ProdcutModel } from "../Model/product_model";

const CreateItem = asyncHandler(async (req: Request, res: Response) => {
   let newproduct = new ProdcutModel({
    item_name: req.body,
    type: req.body,
    expiry: req.body,
   })
   
    newproduct.save();
    res.send("product saved");
});

export { CreateItem };