import { env } from "@/env";

export const GA_MEASUREMENT_ID = env.NEXT_PUBLIC_GA_ID;

/**
 * 認証ソースを GA4 ユーザープロパティにセットする。
 * 以降のすべてのイベントに auth_source が自動付与される。
 */
export function setAuthUser(source: string): void {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("set", "user_properties", { auth_source: source });
}

export function trackAuthSuccess(source: string): void {
  if (typeof window === "undefined" || !window.gtag) return;
  setAuthUser(source);
  window.gtag("event", "auth_success", { auth_source: source });
}
