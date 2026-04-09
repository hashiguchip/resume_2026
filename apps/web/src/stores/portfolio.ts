import { create } from "zustand";
import { env } from "@/env";
import type { HttpError } from "@/libs/http";
import { getPortfolio, type Portfolio } from "@/services/api/portfolio";

type PortfolioStore = {
  data: Portfolio | null;
  loading: boolean;
  error: HttpError | null;
  fetch: (code: string) => Promise<void>;
  reset: () => void;
};

export const usePortfolioStore = create<PortfolioStore>()((set) => ({
  data: null,
  loading: false,
  error: null,
  fetch: async (code: string) => {
    if (!env.NEXT_PUBLIC_DATA_API_URL) {
      set({
        data: null,
        loading: false,
        error: { type: "network", message: "NEXT_PUBLIC_DATA_API_URL is not configured" },
      });
      return;
    }
    set({ loading: true, error: null });
    const result = await getPortfolio(code);
    if (result.ok) {
      set({ data: result.data, loading: false, error: null });
    } else {
      set({ data: null, loading: false, error: result.error });
    }
  },
  reset: () => set({ data: null, loading: false, error: null }),
}));
