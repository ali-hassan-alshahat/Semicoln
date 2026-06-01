import { useState } from "react";
import pic from "../../assets/FrameAuthLogin.png";
import { Button } from "@/components/ui/button";

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen w-screen flex overflow-hidden bg-white">
      <div className="flex-1 flex flex-col justify-center px-16 mx-10">
        <p className="text-gray-500 text-base mb-1">Welcome Back</p>
        <h1 className="text-3xl font-bold text-black mb-8">UserName!</h1>

        <label className="text-sm text-gray-700 mb-2">Enter Your Password</label>
        <div className="relative w-72">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-10 text-sm outline-none focus:border-blue-500"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            )}
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-1 mb-6 w-72">
          Up to 8 characters with an Uppercase, symbol and number
        </p>

        <Button className="w-44 hover:cursor-pointer">
          Log In
        </Button>

        <button className="mt-5 text-blue-600 font-medium text-sm hover:cursor-pointer hover:underline w-fit">
          Forgot Password ?
        </button>
      </div>

      <div className="w-[50%] m-2 rounded-3xl overflow-hidden relative">
        <img
          src={pic}
          alt="Productivity panel"
          className="w-full h-full object-cover object-left"
        />
        <div className="absolute top-6 right-6">
          <Button variant="secondary" className="text-primary hover:cursor-pointer">
            Create Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;