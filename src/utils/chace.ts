export interface Recommendation {
  recommendations: [
    {
      product_id: number;
      score: number;
    }
  ];
}

export const saveCache = (key: string, data: Recommendation, ttl = 300000) => {
  const record = {
    value: data,
    expiry: Date.now() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(record));
};

export const loadCache = <T>(key: string): T | null => {
  const record = localStorage.getItem(key);
  if (!record) return null;

  try {
    const parsed = JSON.parse(record) as { value: T; expiry: number };

    if (typeof parsed.expiry !== "number") {
      localStorage.removeItem(key);
      return null;
    }

    if (Date.now() > parsed.expiry) {
      localStorage.removeItem(key);
      return null;
    }

    return parsed.value;
  } catch (err) {
    console.error("Error parsing cache:", err);
    return null;
  }
};

