import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { ProductModel } from "../Model/product_model";

// Create item and add to database function
const CreateItem = asyncHandler(async (req: Request, res: Response) => {
  const { item_name, type, expiry, price } = req.body;

  //finds the item id of the last item placed in the database. 
  let lastId = await ProductModel.findOne().sort({ item_id: -1 });
  const item_id = lastId ? lastId.item_id + 1 : 1;

  const newproduct = new ProductModel({
    item_id, //number
    item_name, //String
    type, //String
    expiry: new Date(expiry), // Date is in MM/DD/YY
    price, //number
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
