import mongoose, { model, Model } from "mongoose";
import {Schema} from "mongoose";

interface product {
    item_id: number
    item_name: string;
    type: string
    expiry: Date
    price: number
}

const Productschema = new Schema<product>({
    item_id: {type: Number, required:false},
    item_name: {type: String, required: true},
    type: {type: String, required: true},
    expiry: {type: Date, required: true},
    price: {type: Number, required: false},
})

export const ProductModel: Model<product> = model<product>("item", Productschema);