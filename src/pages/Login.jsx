import { useEffect, useState } from "react";
import Button from "../ui/Button";
import {
  AiOutlineUser,
  AiOutlineLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import Spinner from "../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate("/dashboard");
  const { isLoading, isAuthenticated, login } = useAuthContext();

  const togglePasswordVisibility = () => {
    setShowPassword((show) => !show);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) login(email, password);
  };

  useEffect(() => {
    if (isAuthenticated) {
      setTimeout(() => {
        navigate("/dashboard", { replace: true });
      }, 3000);
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="mx-auto grid h-screen bg-gray-100  md:grid-cols-2 ">
      <div className="hidden h-screen items-center justify-center bg-orange-500 px-28 md:flex">
        <img src="./cart.svg" className="h-72 w-full" alt="" />
      </div>
      <form
        className="mx-auto flex h-screen  w-3/4  flex-col justify-center sm:h-auto sm:px-6 "
        onSubmit={handleSubmit}
      >
        <div className="mb-4 text-center ">
          <img
            src="/logo.png"
            alt="logo"
            className="mx-auto  w-1/5 rounded-md bg-white p-4 shadow-md md:w-1/4"
          />

          <p className="mt-4 text-xl font-bold text-gray-700">
            Hello! Welcome back
          </p>
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="email"
            className="mb-1 block text-lg font-semibold text-gray-900"
          >
            Email
          </label>
          <div className="relative">
            <span className="absolute left-2 top-1/2 -translate-y-1/2 transform">
              <AiOutlineUser className="text-xl text-orange-500" />
            </span>
            <input
              className="w-full rounded-lg border border-gray-300 bg-gray-100 px-1 py-2 pl-8 focus:border-blue-500 focus:outline-none"
              type="email"
              id="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="password"
            className="mb-1 block text-lg font-semibold text-gray-900"
          >
            Password
          </label>
          <div className="relative">
            <span className="absolute left-2 top-1/2 -translate-y-1/2 transform text-gray-500">
              <AiOutlineLock className="text-xl text-orange-500" />
            </span>
            <input
              className="w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2 pl-8 focus:border-blue-500 focus:outline-none"
              type={showPassword ? "text" : "password"} // Toggle input type
              id="password"
              placeholder="*************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <span
              className="absolute right-4 top-1/2 -translate-y-1/2 transform cursor-pointer text-gray-500"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
        </div>
        <div className="mb-4 flex items-center justify-between text-sm">
          <label className="mb-1 flex items-center text-gray-900">
            <input
              type="checkbox"
              className="mr-2 h-4 w-6 hover:cursor-pointer"
            />
            <span className="font-bold">Remember Me</span>
          </label>

          <a
            href="/reset-password"
            className="font-bold text-blue-500 hover:underline"
          >
            Reset Password
          </a>
        </div>
        <Button>
          {isLoading ? <Spinner /> : <span className="font-bold">Login</span>}
        </Button>
      </form>
    </div>
  );
};

export default Login;
