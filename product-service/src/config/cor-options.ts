import { CorsOptions } from "cors";
import { allowed_Origins } from "./allowedorigins";
// cross origin resource sharing

const corsOptions: CorsOptions = {
  origin: (origin: string | undefined, callback: Function) => {
    if (!origin || allowed_Origins.indexOf(origin) !== 1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

export { corsOptions };