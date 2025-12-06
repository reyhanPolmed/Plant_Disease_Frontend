import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { CartItem } from "../features/cart/CartSlice";

import {
  addToCart,
  decreaseCart,
  removeFromCart,
  selectAllItems,
  getTotals,
  selectTotalAmount,
} from "../features/cart/CartSlice";
// import tomat from "../assets/cabai.png";
import { Link } from "react-router-dom";
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectAllItems);
  const cartTotalAmount = useSelector(selectTotalAmount);
  const navigate = useNavigate()
  console.log(cartTotalAmount);
  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  const handleRemoveFromCart = (cart: CartItem) => {
    dispatch(removeFromCart(cart));
  };

  const handleDecreaseCart = (cart: CartItem) => {
    dispatch(decreaseCart(cart));
  };

  const handleIncreaseCart = (cart: CartItem) => {
    dispatch(addToCart(cart));
  };

  // const handleClearCart = () => {
  //   dispatch(clearCart())
  // }
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleCheckout = () => {
    navigate('/checkout')
  }
  return (
    <>
      {cart.length === 0 ? (
        <div className="font-sans min-h-screen flex flex-col  w-full justify-center items-center">
          <p className="font-bold uppercase">your cart is currently empty</p>
          <Link to="/">
            <button className="py-2 px-5 text-sm rounded-md border block mt-5 bg-primary font-semibold text-white">
              Start Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className="min-h-screen w-full flex mt-4 justify-center">
          <div className="flex gap-16 justify-center my-10">
            <div className="">
              <table className="min-w-full border rounded-lg overflow-hidden">
                <thead className="bg-green-600">
                  <tr className="text-white font-normal">
                    <th className="px-4 py-2 w-[400px] font-normal">Product</th>
                    <th className="px-4 py-2 w-[150px] font-normal">Price</th>
                    <th className="px-4 py-2 w-[150px] font-normal">
                      Quantity
                    </th>
                    <th className="px-4 py-2 w-[150px] font-normal">
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {cart?.map((cart) => (
                    <tr className="text-center border-t-2 border-slate-200">
                      <td className="px-4 py-2" style={{ padding: "20px" }}>
                        <div className="flex items-center w-full gap-6">
                          <button onClick={() => handleRemoveFromCart(cart)}>
                            <RxCross2 />
                          </button>
                          <img
                            src={cart.image}
                            alt=""
                            className="w-[70px] rounded-lg"
                          />
                          <p className="text-sm">{cart.title}</p>
                        </div>
                      </td>
                      <td className="px-4 py-2">Rp {cart.price}</td>
                      <td className="px-4 py-2 flex justify-center items-center h-full mt-5">
                        <div className="flex justify-evenly items-center w-24 h-8 outline outline-1 outline-slate-400 rounded-full">
                          <button
                            onClick={() => handleDecreaseCart(cart)}
                            className="w-6 h-6 "
                          >
                            {" "}
                            -{" "}
                          </button>
                          <div className="w-[1px] h-full bg-slate-400"></div>
                          <div className="w-6 h-6">{cart.cartQuantity}</div>
                          <div className="w-[1px] h-full bg-slate-400"> </div>
                          <button
                            onClick={() => handleIncreaseCart(cart)}
                            className="w-6 h-6"
                          >
                            {" "}
                            +{" "}
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-2">Rp {cart.price * cart.cartQuantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="w-[300px] h-[400px] border-[1px] border-[#e9ece7] shadow-md rounded-lg">
              <div className="p-5">
                <p className="font-bold text-lg">Order Summary</p>
                <div className="w-full h-[1px] bg-slate-400 my-3"></div>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between">
                    <p className="font-semibold">items</p>
                    <p className="font-bol">{cart.length}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-[#70796c]">Sub Total</p>
                    <p>{cartTotalAmount}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-[#70796c]">Shipping</p>
                    <p>Rp 15.000</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-[#70796c]">Taxes</p>
                    <p>Rp 20.000</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-[#70796c]">Coupon Discount</p>
                    <p>Rp 5000</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-[#70796c]">Total</p>
                    <p>{cartTotalAmount + 40000}</p>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-slate-400 my-3"></div>
                <button onClick={handleCheckout} className="mt-4 w-full h-10 bg-green-600 text-white font-medium text-sm rounded-[50px]">
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
