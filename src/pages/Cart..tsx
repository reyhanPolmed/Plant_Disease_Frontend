import React from "react";
import { RxCross2 } from "react-icons/rx";
import tomat from "../assets/cabai.png";
const Cart = () => {
  return (
    <>
    <div className="min-h-screen w-full flex mt-4 justify-center">
      <div className="flex gap-16 justify-center my-10">
        <div className="">
          <table className="min-w-full border rounded-lg overflow-hidden">
            <thead className="bg-[#004e1d]">
              <tr className="text-white font-normal">
                <th className="px-4 py-2 w-[400px] font-normal">Product</th>
                <th className="px-4 py-2 w-[150px] font-normal">Price</th>
                <th className="px-4 py-2 w-[150px] font-normal">Quantity</th>
                <th className="px-4 py-2 w-[150px] font-normal">Subtotal</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="text-center border-t-2 border-slate-200">
                <td className="px-4 py-2" style={{ padding: "20px" }}>
                  <div className="flex items-center w-full gap-6">
                    <RxCross2 />
                    <img src={tomat} alt="" className="w-[50px] rounded-lg" />
                    <p>Monster delicolsa</p>
                  </div>
                </td>
                <td className="px-4 py-2">Rp 25.000</td>
                <td className="px-4 py-2 flex justify-center items-center h-full mt-5">
                    <div className="flex justify-evenly items-center w-24 h-8 outline outline-1 outline-slate-400 rounded-full">
                        <button className="w-6 h-6 "> - </button>
                        <div className="w-[1px] h-full bg-slate-400"></div>
                        <div className="w-6 h-6">2 </div>
                        <div className="w-[1px] h-full bg-slate-400"> </div>
                        <button className="w-6 h-6"> + </button>
                    </div>
                </td>
                <td className="px-4 py-2">Rp 50.0000</td>
              </tr>
              <tr className="text-center border-t-2 border-slate-200">
                <td className="px-4 py-2" style={{ padding: "20px" }}>
                  <div className="flex items-center w-full gap-6">
                    <RxCross2 />
                    <img src={tomat} alt="" className="w-[50px] rounded-lg" />
                    <p>Monster delicolsa</p>
                  </div>
                </td>
                <td className="px-4 py-2">Rp 25.000</td>
                <td className="px-4 py-2 flex justify-center items-center h-full mt-5">
                    <div className="flex justify-evenly items-center w-24 h-8 outline outline-1 outline-slate-400 rounded-full">
                        <button className="w-6 h-6 "> - </button>
                        <div className="w-[1px] h-full bg-slate-400"></div>
                        <div className="w-6 h-6">2 </div>
                        <div className="w-[1px] h-full bg-slate-400"> </div>
                        <button className="w-6 h-6"> + </button>
                    </div>
                </td>
                <td className="px-4 py-2">Rp 50.0000</td>
              </tr>
              <tr className="text-center border-t-2 border-slate-200">
                <td className="px-4 py-2" style={{ padding: "20px" }}>
                  <div className="flex items-center w-full gap-6">
                    <RxCross2 />
                    <img src={tomat} alt="" className="w-[50px] rounded-lg" />
                    <p>Monster delicolsa</p>
                  </div>
                </td>
                <td className="px-4 py-2">Rp 25.000</td>
                <td className="px-4 py-2 flex justify-center items-center h-full mt-5">
                    <div className="flex justify-evenly items-center w-24 h-8 outline outline-1 outline-slate-400 rounded-full">
                        <button className="w-6 h-6 "> - </button>
                        <div className="w-[1px] h-full bg-slate-400"></div>
                        <div className="w-6 h-6">2 </div>
                        <div className="w-[1px] h-full bg-slate-400"> </div>
                        <button className="w-6 h-6"> + </button>
                    </div>
                </td>
                <td className="px-4 py-2">Rp 50.0000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-[300px] h-[400px] border-[1px] border-[#b5bbb2] rounded-lg">
          <div className="p-5">
            <p className="font-bold text-lg">Order Summary</p>
            <div className="w-full h-[1px] bg-slate-400 my-3"></div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <p className="font-semibold">items</p>
                <p className="font-bol">9</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[#70796c]">Sub Total</p>
                <p>Rp 50.000</p>
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
              <p>Rp 100.000</p>
            </div>
            </div>
            <div className="w-full h-[1px] bg-slate-400 my-3"></div>
            <button className="mt-4 w-full h-10 bg-[#004e1d] text-white font-medium text-sm rounded-[50px]">Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Cart;
