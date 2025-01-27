import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { ProductModel } from "../Model/product_model";

// Fetch item from database function
const FetchItem = asyncHandler(async (req: Request, res: Response) => {
    try{
        const product = await ProductModel.find();
        res.json(product);

        if(!product || product.length === 0 ){
            res.status(404).json({message: "no product list at the moment"});
        }
    }catch(error){
        res.status(401).json({ message: "Unable to fetch data at the moment" });
    }
});

export { FetchItem };
