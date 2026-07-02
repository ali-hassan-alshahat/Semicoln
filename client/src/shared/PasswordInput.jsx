import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = ({
  register,
  error,
  placeholder = "Enter your password",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-72">
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className={`w-full border rounded-lg px-4 py-3 pr-10 text-sm outline-none transition
          ${
            error ? "border-red-500" : "border-gray-300 focus:border-blue-500"
          }`}
          {...register("password")}
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default PasswordInput;
