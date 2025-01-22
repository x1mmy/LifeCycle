import { z } from "zod";

export const product = z.object({
    item_name: z.string(),
    type: z.string(),
    expiry: z.date(),
});
