import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { ProductModel } from "../Model/product_model";

// Create item and add to database function
const CreateItem = asyncHandler(async (req: Request, res: Response) => {
  const { item_name, type, expiry } = req.body;

  const newproduct = new ProductModel({
    item_name, //String
    type, //String
    expiry: new Date(expiry) // Date is in MM/DD/YY
  });

  //Add new product to database or display error and reject it. 
  try {
    await newproduct.save(); 
    res.status(201).json({ message: "Product saved", product: newproduct });
  } catch (error) { 
    res.status(400).json({ message : "Error" });
  }
});

export { CreateItem };
