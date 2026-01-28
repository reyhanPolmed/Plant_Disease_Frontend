// API configuration and helper functions

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}

export interface ApiResponseCart<T> {
  message: string;
  cartItem: T;
}
export interface ApiResponseOrder<T> {
  message: string;
  order: T;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string; // string karena dari API "1500.00"
  stock: number;
  image: string;
  unit: string | null;
  rating: number;
  category: string;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface CartItem {
  id: number;
  userId: number;
  productId: number;
  quantity: number;
  products: Product;
}

export interface OrderItem {
  id: number;
  orderId: number;
  productId: number;
  quantity: number;
  price: string;
  products: Product;
}

export type OrderStatus =
  | "pending"
  | "paid"
  | "shipped"
  | "completed"
  | "cancelled";

export type Orders<T> = {
  id: number;
  userId: number;
  totalAmount: string;
  status: OrderStatus;
  shippingAddress: string;
  paymentMethod: string;
  createdAt: string;
  updatedAt: string;
  items: T;
};

export type AllOrder<T> = {
  orders: Orders<T>[];
};


export interface Response {
  response: string;
}

export interface PlantDiseaseData {
  plant: Plant;
  diseases: Disease[];
}
export interface Plant {
  id: number;
  name: string;
  scientificName: string;
  description: string;
  imageUrl: string;
}
interface User {
  id: string;
  first_name: string | null;
}
export interface Login {
  user: User;
  token: string;
}

export interface Register {
  user: string;
  token: string;
}
export interface AddToCart {
  productId: number;
  quantity: number;
}
export interface RemoveCart {
  cartItem: number;
  userId: number;
}

export interface Interactions {
  success: string;
  message: string;
}

export interface Disease {
  id: number;
  localName: string;
  scientificName: string;
  description: string;
  causativeOrganism: string;
  imageUrl: string;
}

interface ControlStep {
  id: number;
  description: string;
}

export interface DiseaseDetail {
  id: number;
  localName: string;
  scientificName: string; // Nama ilmiah inang/penyakit
  causativeOrganism: string; // Patogen
  description: string;
  imageUrl: string; // Array URL gambar
  symptoms: {
    description: string;
  };
  cycle: {
    spreadMethod: string;
    environmentalFactors: string;
  };
  controls: ControlStep[];
}

export interface Recommendation {
  recommendations: [
    {
      product_id: number;
      score: number;
    }
  ];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  stock: number;
  image: string;
  unit: string | null;
  rating: number;
  category: string;
}

// Order Item

// Order
export interface Order {
  id: number;
  userId: number;
  totalAmount: string;
  status: "pending" | "paid" | "shipped" | "completed" | "cancelled";
  shippingAddress: string;
  paymentMethod: string;
  createdAt: string;
  updatedAt: string;
  items: OrderItem[];
}

// API Response
export interface CreateOrderResponse {
  message: string;
  order: Order;
}

// API functions
export async function fetchAllPlants(): Promise<Plant[]> {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_PATH}/plant`);
    const responseBody: ApiResponse<Plant[]> = await response.json();
    return responseBody.data;
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching diseases:", error);
    throw error;
  }
}

export async function fetchDiseasesByPlantId(
  plantId: string
): Promise<Disease[]> {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_PATH}/disease/${plantId}`
    );
    const responseBody: ApiResponse<PlantDiseaseData> = await response.json();
    return responseBody.data.diseases;
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching disease detail:", error);
    throw error;
  }
}

export async function fetchDiseaseDetail(
  plantId: string,
  diseaseId: string
): Promise<DiseaseDetail> {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_PATH}/disease/${plantId}/${diseaseId},`
    );
    const responseBody: ApiResponse<DiseaseDetail> = await response.json();
    return responseBody.data;
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error searching diseases:", error);
    throw error;
  }
}
export async function fetchLogin(
  email: string,
  password: string
): Promise<Login> {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_PATH}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );

    const responseBody: ApiResponse<Login> = await response.json();
    return responseBody.data;
    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }
    return await response.json();
  } catch (error) {
    console.error("Error searching diseases:", error);
    throw error;
  }
}

export async function fetchRegister(
  firstname: string,
  lastname: string,
  email: string,
  password: string
): Promise<Register> {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_PATH}/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email: email,
          password: password,
        }),
      }
    );
    const responseBody: ApiResponse<Register> = await response.json();
    return responseBody.data;
    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }
    return await response.json();
  } catch (error) {
    console.error("Error searching diseases:", error);
    throw error;
  }
}

export async function recordInteraction(
  userId: string,
  productId: number,
  rating: number,
  type: "view" | "like" | "purchase"
): Promise<Interactions> {
  try {
    const response = await fetch("http://localhost:5001/api/interactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        product_id: productId,
        rating,
        type,
      }),
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const responseBody: ApiResponse<Interactions> = await response.json();
    return responseBody.data; // mengikuti gaya fetchRegister
  } catch (error) {
    console.error("[v0] Error recording interaction:", error);
    throw error; // mengikuti gaya fetchRegister
  }
}

export async function getRecommendations(
  userId: string,
  method: "user_based" | "item_based" | "hybrid"
): Promise<Recommendation> {
  try {
    const response = await fetch(
      `http://localhost:5001/api/recommendations/${userId}?method=${method}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data: Recommendation = await response.json();

    console.log("DATA JSON:", data);
    console.log("REKOMENDASI:", data.recommendations);

    return data;
  } catch (error) {
    console.error("[v0] Error fetching recommendations:", error);
    throw error;
  }
}

export async function fetchAddToCart(
  productId: number,
  quantity: number
): Promise<AddToCart> {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_PATH}/cart/1`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId,
        quantity,
      }),
    });
    const responseBody: ApiResponseCart<CartItem> = await response.json();
    return responseBody.cartItem;
    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }
    return await response.json();
  } catch (error) {
    console.error("Error searching diseases:", error);
    throw error;
  }
}

export async function fetchDeleteCart(
  cartItem: number,
  userId: number
): Promise<Response> {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_PATH}/cart/${cartItem}/${userId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const responseBody: Response = await response.json();
    return responseBody;
    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }
    return await response.json();
  } catch (error) {
    console.error("Error searching diseases:", error);
    throw error;
  }
}

export async function fetchCreatOrder(
  shippingAddress: string,
  paymentMethod: string,
  userId: number
): Promise<CreateOrderResponse> {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_PATH}/orders/${userId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          shippingAddress,
          paymentMethod,
        }),
      }
    );
    const responseBody: ApiResponseOrder<CreateOrderResponse> =
      await response.json();
    return responseBody.order;
    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }
    return await response.json();
  } catch (error) {
    console.error("Error searching diseases:", error);
    throw error;
  }
}

export async function fetchAllOrder(
  userId: number
): Promise<AllOrder<OrderItem[]>>{
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_PATH}/orders/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseBody = await response.json();
    return responseBody;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
}
