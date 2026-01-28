import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllOrder } from "@/lib/api";
import { selectCurrentUser } from "@/features/user/AuthSlice";
import { useState } from "react";

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

const TranckingOrder = () => {
  const user = useSelector(selectCurrentUser);
  const userId = user?.id;
const [orders, setOrders] = useState<Orders<OrderItem[]>[]>([])

  // ✅ no error
  
useEffect(() => {
  const fetchData = async () => {
    const res = await fetchAllOrder(Number(userId));
    setOrders(res.orders);
    console.log("orders" + orders)
  };

  if (userId) fetchData();
}, [userId]);

  return (
    <div className="text-gray-800 p-4 md:p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
            <h2 className="font-bold text-lg mb-4">Order Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                  Order Number
                </p>
                <p className="font-bold text-gray-900 mt-1">#12345-ABC</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                  Purchase Date
                </p>
                <p className="font-bold text-gray-900 mt-1">Aug 15, 2024</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                  Total Amount
                </p>
                <p className="font-bold text-gray-900 mt-1">
                  {/* Rp {totalAmount.toLocaleString()} */}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
            <h2 className="font-bold text-lg mb-6">
              {/* Item Ordered {cartItems.length} */}
            </h2>

            <div className="">
              {orders.map((item) => (
                <div>
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden shrink-0">
                      {/* <img
                        src={item.}
                        alt="Plant"
                        className="w-full h-full object-cover"
                      /> */}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">{item.status}</h3>
                      <p className="text-gray-500 text-sm">
                        quantity: {item.totalAmount}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">
                        {/* Rp {item.price.toLocaleString()} */}
                      </p>
                    </div>
                  </div>
                  <hr className="border-gray-100 my-6" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
            <h2 className="font-bold text-lg mb-4">Tracking Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
              <div>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                  Shipping Provider
                </p>
                <p className="font-bold text-gray-900 mt-1">FedEx</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                  Tracking Number
                </p>
                <p className="font-bold text-gray-900 mt-1">FX123456789EN</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                  Estimated Delivery
                </p>
                <p className="font-bold text-gray-900 mt-1">August 19, 2024</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                  Shipping Address
                </p>
                <p className="font-bold text-gray-900 mt-1">
                  jl abdul hakim no.4b Kecamatan Medan Selayang, kota Medan
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 h-[600px] flex flex-col justify-between">
            <div>
              <h2 className="font-bold text-lg mb-8">Order Status</h2>

              <div className="relative pl-2">
                <div className="absolute left-[28px] top-2 bottom-10 w-0.5 bg-gray-200 -z-0"></div>

                <div className="flex gap-4 mb-8 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-lime-500 flex items-center justify-center text-white shrink-0 shadow-sm border-4 border-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">
                      Order Placed
                    </h4>
                    <p className="text-gray-500 text-xs mt-0.5">
                      Aug 15, 2:30 PM
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 mb-8 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-lime-500 flex items-center justify-center text-white shrink-0 shadow-sm border-4 border-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">
                      Processing
                    </h4>
                    <p className="text-gray-500 text-xs mt-0.5">
                      Aug 15, 7:30 PM
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 mb-8 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0 shadow-md border-3 border-white ring-2 ring-blue-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">
                      local_shipping
                    </h4>
                    <p className="text-gray-500 text-xs mt-0.5">
                      Aug 16, 21:30 PM
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 mb-8 relative z-10 opacity-50">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 shrink-0 border-4 border-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">
                      Out for Delivery
                    </h4>
                  </div>
                </div>

                <div className="flex gap-4 relative z-10 opacity-50">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 shrink-0 border-4 border-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">
                      Delivered
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button className="w-full bg-[#0e3f28] hover:bg-[#0a2e1d] text-white font-medium py-3 rounded-xl transition duration-200 shadow-lg shadow-green-900/20">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranckingOrder;
