import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { ProdcutModel } from "../Model/product_model";

const CreateItem = asyncHandler(async (req: Request, res: Response) => {
   let newproduct = new ProdcutModel({
    item_name: "milk",
    type: "diary",
    expiry: new Date("2024-12-31"),
   })
   
    newproduct.save();
    console.log("product saved");
});

export { CreateItem };