import { z } from "zod";

export const product = z.object({
    item_name: z.string(),
    barcode: z.number(),
});
