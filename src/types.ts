export interface User {
  id: number
  email: string
  name: string
}

export interface Product {
  id: number
  name: string
  description: string
  price: number
  stock: number
  image: string
  createdAt?: string
  updatedAt?: string
}

export interface CartItem {
  id: number
  userId: number
  productId: number
  quantity: number
  product: Product
  createdAt?: string
  updatedAt?: string
}

export interface OrderItem {
  id: number
  orderId: number
  productId: number
  quantity: number
  price: number
  product: Product
  createdAt?: string
  updatedAt?: string
}

export interface Order {
  id: number
  userId: number
  totalAmount: number
  status: "pending" | "processing" | "completed" | "cancelled"
  shippingAddress: string
  paymentMethod: string
  items: OrderItem[]
  createdAt?: string
  updatedAt?: string
}

export interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
}

export interface CartState {
  items: CartItem[]
  loading: boolean
  error: string | null
}

export interface OrderState {
  orders: Order[]
  currentOrder: Order | null
  loading: boolean
  error: string | null
}

export interface ProductState {
  products: Product[]
  selectedProduct: Product | null
  loading: boolean
  error: string | null
}
