import { z } from "zod";

export const product = z.object({
    item_id: z.number(),
    item_name: z.string(),
    type: z.string(),
    expiry: z.date(),
    price: z.number(),
});
