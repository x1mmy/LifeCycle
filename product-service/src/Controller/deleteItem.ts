import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { ProductModel } from "../Model/product_model";

const DeleteItem = asyncHandler(async (req: Request, res: Response) => {
  const ItemDeleted = await ProductModel.deleteOne({ _id: req.body._id });
  if (ItemDeleted.deletedCount === 1) {
    res.status(201).json({ message: "Product deleted" });
  } else {
    res.status(400).json({ message: "Error, could not delete" });
  }
});

export { DeleteItem };
