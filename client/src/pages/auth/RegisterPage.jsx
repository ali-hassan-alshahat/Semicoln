import pic from "../../assets/FrameAuthRegister.png";
import { Button } from "@/components/ui/button";
import PasswordInput from "@/shared/PasswordInput";
import AuthButton from "@/shared/AuthButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/schemas/auth.schema";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/auth/authThunk";
import { Link, useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    const result = await dispatch(registerUser(data));
    if (registerUser.fulfilled.match(result)) {
      navigate("/");
    }
  };

  return (
    <div className="h-screen w-screen flex overflow-hidden bg-white">
      <div className="w-[50%] m-2 rounded-3xl overflow-hidden relative">
        <img
          src={pic}
          alt="Register"
          className="w-full h-full object-cover object-left"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center px-16 mx-10">
        <div className="absolute top-6 right-6">
          <Link to={"/auth/login"}>
            <Button
              variant="secondary"
              className="text-primary bg-white border-primary w-32 cursor-pointer"
            >
              Log In
            </Button>
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-black mb-2">
          Create an Account!
        </h1>
        <p className="text-gray-500 text-base mb-8">It's Simple and Easy!!</p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <label className="text-sm text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className={`w-72 border rounded-lg px-4 py-3 text-sm outline-none transition
            ${
              errors.name || backendErrors.name
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-500"
            }`}
            {...register("name")}
          />
          {(errors.name || backendErrors.name) && (
            <p className="text-xs text-red-500 mt-1 mb-4">
              {errors.name?.message ?? backendErrors.name}
            </p>
          )}
          <label className="text-sm text-gray-700 mb-2 mt-4">
            Email Address
          </label>
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
          <label className="text-sm text-gray-700 mb-2 mt-4">Password</label>
          <PasswordInput
            register={register}
            name="password"
            error={errors.password?.message ?? backendErrors.password}
          />
          <p className="text-xs text-gray-400 mt-1 mb-6 w-72">
            Up to 8 characters with an Uppercase, symbol and number
          </p>
          {error && (
            <div className="mt-4 mb-4 w-72 rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-600">
              {error}
            </div>
          )}
          <AuthButton loading={loading}>Create Account</AuthButton>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
