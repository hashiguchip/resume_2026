import { create } from "zustand";
import { api, type PricingData } from "@/services/api";

export type { PricingData };

type PricingStore = {
  pricing: PricingData | null;
  loading: boolean;
  fetchPricing: (code: string) => Promise<void>;
};

export const usePricingStore = create<PricingStore>()((set) => ({
  pricing: null,
  loading: false,
  fetchPricing: async (code: string) => {
    set({ loading: true });
    const result = await api.pricing(code);
    set({ pricing: result.ok ? result.data : null, loading: false });
  },
}));
