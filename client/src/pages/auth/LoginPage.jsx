import pic from "../../assets/FrameAuthLogin.png";
import { Button } from "@/components/ui/button";
import AuthButton from "@/shared/AuthButton";
import PasswordInput from "@/shared/PasswordInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schemas/auth.schema";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/redux/auth/authThunk";
import { Link, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const dispatch = useDispatch();

  const { loading, error, validationErrors } = useSelector(
    (state) => state.auth,
  );

  const backendErrors = Object.fromEntries(
    validationErrors.map((err) => [err.field, err.message]),
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const result = await dispatch(loginUser(data));

    if (loginUser.fulfilled.match(result)) {
      navigate("/");
    }
  };

  return (
    <div className="h-screen w-screen flex overflow-hidden bg-white">
      <div className="flex-1 flex flex-col justify-center px-16 mx-10">
        <p className="text-3xl font-bold text-black mb-8">Welcome Back!</p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <label className="text-sm text-gray-700 mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className={`w-72 border rounded-lg px-4 py-3 text-sm outline-none transition
            ${
              errors.email || backendErrors.email
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-500"
            }`}
            {...register("email")}
          />
          {(errors.email || backendErrors.email) && (
            <p className="text-xs text-red-500 mt-1 mb-4">
              {errors.email?.message ?? backendErrors.email}
            </p>
          )}
          <label className="text-sm text-gray-700 mb-2 mt-4">
            Enter Your Password
          </label>
          <PasswordInput
            register={register}
            error={errors.password?.message ?? backendErrors.password}
          />
          <p className="text-xs text-gray-400 mt-1 mb-6 w-72">
            Up to 8 characters with an Uppercase, symbol and number
          </p>
          {error && !backendErrors.email && !backendErrors.password && (
            <div className="mb-4 w-72 rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-600">
              {error}
            </div>
          )}
          <AuthButton loading={loading}>Log In</AuthButton>
          <button
            type="button"
            className="mt-5 text-blue-600 font-medium text-sm hover:underline w-fit cursor-pointer"
          >
            Forgot Password?
          </button>
        </form>
      </div>
      <div className="w-[50%] m-2 rounded-3xl overflow-hidden relative">
        <img
          src={pic}
          alt="Productivity panel"
          className="w-full h-full object-cover object-left"
        />
        <div className="absolute top-6 right-6">
            <Link to={"/auth/register"}>
          <Button variant="secondary" className="text-primary cursor-pointer">
            Create Account
          </Button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
