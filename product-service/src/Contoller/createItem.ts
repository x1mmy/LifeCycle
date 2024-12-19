import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { product } from "../Schema/product-schema";

const CreateItem = asyncHandler(async (req: Request, res: Response) => {

});

export { CreateItem };