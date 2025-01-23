import mongoose, { model, Model } from "mongoose";
import {Schema} from "mongoose";

interface product {
    item_name: string;
    type: string
    expiry: Date
}

const Productschema = new Schema<product>({
    item_name: {type: String, required: true},
    type: {type: String, required: true},
    expiry: {type: Date, required: true},
})

export const ProductModel: Model<product> = model<product>("item", Productschema);