import { Search, ChevronDown } from "lucide-react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllOrder } from "@/lib/api";
import { selectCurrentUser } from "@/features/user/AuthSlice";
import { useState } from "react";
// Data Dummy sesuai gambar
// const ordersData = [
//   {
//     id: "#34567",
//     status: "Completed",
//     date: "Oct 26, 2023",
//     customer: "Alexandre Pires",
//     total: "$128.50",
//     action: "View Details",
//   },
//   {
//     id: "#34566",
//     status: "Awaiting Payment",
//     date: "Oct 25, 2023",
//     customer: "Maria Rodriguez",
//     total: "$49.99",
//     action: "Pay Now",
//   },
//   {
//     id: "#34565",
//     status: "Shipped",
//     date: "Oct 24, 2023",
//     customer: "Johnathan Lee",
//     total: "$250.00",
//     action: "View Details",
//   },
//   {
//     id: "#34564",
//     status: "Canceled",
//     date: "Oct 23, 2023",
//     customer: "Samantha Green",
//     total: "$75.20",
//     action: "View Details",
//   },
// ];

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

const OrderHistory = () => {
  const user = useSelector(selectCurrentUser);
  const userId = user?.id;
  const [orders, setOrders] = useState<Orders<OrderItem[]>[]>([]);

  // ✅ no error

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchAllOrder(Number(userId));
      setOrders(res.orders);
      console.log("orders" + orders);
    };

    if (userId) fetchData();
  }, [userId]);
  const [activeTab, setActiveTab] = useState("All Orders");

  // Helper untuk warna badge status
  const getStatusStyles = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700";
      case "pending":
        return "bg-orange-100 text-orange-700";
      case "processing":
        return "bg-blue-100 text-blue-700";
      case "Canceled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen text-gray-800">
      {/* --- Main Content --- */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Order History</h1>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-8">
          {["All Orders", "Awaiting Payment", "Completed"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-1 mr-6 text-sm font-medium border-b-2 transition ${
                activeTab === tab
                  ? "border-[#004e1d] text-[#004e1d]"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by Order ID, product name..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              Date Range <ChevronDown size={16} />
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              Status <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Order ID</p>
                  <p className="font-bold text-gray-900 text-lg">{order.id}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyles(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Date</span>
                  <span className="font-medium text-gray-900">
                    {order.updatedAt}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Customer</span>
                  <span className="font-medium text-gray-900">
                    {user?.first_name}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Total</span>
                  <span className="font-bold text-gray-900">{order.totalAmount}</span>
                </div>
              </div>

              <button className="w-full py-2.5 bg-[#00722a] hover:bg-[#004e1d] text-white font-medium rounded-lg text-sm transition">
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-500 mb-4 sm:mb-0">
            Showing <span className="font-medium text-gray-900">1 to 10</span>{" "}
            of <span className="font-medium text-gray-900">20</span> results
          </p>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50">
              Previous
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderHistory;
