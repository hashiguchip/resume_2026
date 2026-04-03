import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_GA_ID: z.string().min(1),
    NEXT_PUBLIC_PRICING_API_URL: z.string().url().optional(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    NEXT_PUBLIC_PRICING_API_URL: process.env.NEXT_PUBLIC_PRICING_API_URL,
  },
});
