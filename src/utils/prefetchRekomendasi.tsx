import { getRecommendations } from "../lib/api";
import { loadCache, saveCache } from "./chace";

 // pastikan import type
export interface Recommendation {
  recommendations: [
    {
      product_id: number;
      score: number;
    }
  ];
}

let rekomendasiPromise: Promise<Recommendation> | null = null;

export const prefetchRekomendasi = (
  userId: string,
  method: "user_based" | "item_based" | "hybrid"
): Promise<Recommendation> => {
  // 1. Cek cache dulu
  const cached = loadCache<Recommendation>("rekomendasi_produk");
  if (cached) {
    console.log("CACHE HIT");
    return Promise.resolve(cached);
  }

  console.log("CACHE MISS → FETCH API");

  // 2. Jika belum ada promise, fetch API sekali
  if (!rekomendasiPromise) {
    rekomendasiPromise = getRecommendations(userId, method).then((data) => {
      // simpan ke cache 5 menit
      saveCache("rekomendasi_produk", data, 5 * 60 * 1000);
      return data;
    });
  }

  // 3. Return promise yang sama (supaya tidak fetch berulang)
  return rekomendasiPromise;
};
