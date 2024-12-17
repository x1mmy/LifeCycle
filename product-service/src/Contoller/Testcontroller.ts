import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

const Testnode = asyncHandler(async (req: Request, res: Response) => {
    let life = 5;
    res.send(life.toString());
});

export { Testnode };