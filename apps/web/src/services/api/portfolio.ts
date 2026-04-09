import { env } from "@/env";
import { createHttpClient } from "@/libs/http";
import type { components } from "./schema.generated";

// 生成された OpenAPI schema から型を直接派生させる。
// huma 側の operation 定義 → openapi.yaml → schema.generated.ts と
// 単一経路で contract が伝搬するため、サーバの response 型を frontend が
// 二重定義する必要がない。
export type Portfolio = components["schemas"]["Portfolio"];
export type Project = components["schemas"]["Project"];
export type Pricing = components["schemas"]["Pricing"];

const http = createHttpClient();

/**
 * /api/portfolio を取得する。X-Referral-Code を header に載せる。
 *
 * - Result<Portfolio> を返し、呼び出し側は ok フラグで分岐する
 * - GET 失敗時は libs/http の retry 設定に従う (network/timeout のみ retry)
 */
export const getPortfolio = (code: string) =>
  // biome-ignore lint/style/noNonNullAssertion: guarded by usePortfolioStore.fetch
  http.get<Portfolio>(env.NEXT_PUBLIC_DATA_API_URL!, {
    headers: { "X-Referral-Code": code },
    retries: 2,
  });
