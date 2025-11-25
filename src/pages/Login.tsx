import React from "react";
import { FcGoogle } from "react-icons/fc";
import { fetchLogin } from "@/lib/api";
import herologin from "../assets/heroLogin.jpg";
import { useNavigate } from "react-router-dom";
import { setCredential } from "../features/user/AuthSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import LoginSuccess from "@/components/PopupLoginSuccess";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Authentication logic goes here
    const response = await fetchLogin(email, password);
    const responseBody = await response;
    console.log("response", responseBody);
    if (responseBody) {
      dispatch(setCredential({ ...responseBody }));
      setOpen(true);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } else {
      setMessage("login gagal!");
    }
  };
  return (
    <>
      <div className="w-full h-screen flex gap-20 justify-center p-4">
        {/* image */}
        <div>
          <div
            className="w-[500px] h-[700px] rounded-[20px]"
            style={{
              backgroundImage: `url(${herologin})`,
              width: "400px",
              height: "600px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        {/* form input */}
        <form onSubmit={handleSubmit} className="w-[450px] mt-5">
          <div className="py-[30px]">
            <p>{message}</p>
            <p className="font-medium text-lg">Plant Shop</p>
            <h2 className="font-bold text-2xl">Sign In</h2>
            <p className="font-light text-sm">
              Please fill detail to access your account
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {/* email */}
            <div>
              <p className="text-sm font-normal mb-2">email</p>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="rounded-[50px] outline outline-1 outline-slate-400 px-5 py-2 text-sm w-full"
              />
            </div>
            {/* password */}
            <div>
              <p className="text-sm font-normal mb-2">password</p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="rounded-[50px] outline outline-1 outline-slate-400 px-5 py-2 text-sm w-full"
              />
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="flex gap-2 items-center">
                <input type="checkbox" />
                <p className="text-xs font-normal">Remember me?</p>
              </div>
              <p className="text-xs font-normal mb-2">Forgot Password?</p>
            </div>
            <button
              type="submit"
              className="outline outline-1 rounded-full w-full h-9 bg-[#0D492D] text-white"
            >
              Sign In
            </button>
            <div className="flex justify-center items-center gap-2">
              <div className="w-[150px] h-[1px] bg-slate-400"></div>
              <p className="text-xs">Or Sign in with</p>
              <div className="w-[150px] h-[1px] bg-slate-400"></div>
            </div>
            <div className="relative">
              <p className="absolute top-[6px] left-[117px]">
                <FcGoogle className="w-10 text-2xl" />
              </p>
              <button className="outline outline-1 rounded-full w-full h-9 text-sm outline-slate-400">
                Sign In With Google
              </button>
            </div>
            <p className="m-auto">
              Dont have an account?{" "}
              <span className="text-blue-600">Sign Up</span>
            </p>
          </div>
        </form>
      </div>
      <LoginSuccess isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Login;
