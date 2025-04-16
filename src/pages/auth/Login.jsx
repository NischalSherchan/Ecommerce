import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RxEyeOpen, RxEyeClosed } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../features/authApi";
import { setUserToLocal } from "../../features/UserSlice";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginValidation } from "../../formValidation/validation";
import { MdEmail } from "react-icons/md";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";

const Login = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [userLogin, { isLoading }] = useLoginMutation();
  const [showPassword, setShowPassowrd] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassowrd(!showPassword);
  };

  const onLogin = async (data) => {
    try {
      console.log("iaeefoiabefuo", data);
      const res = await userLogin(data).unwrap();
      console.log("res", res);
      dispatch(setUserToLocal(res));
      toast.success("Login Successful");
      nav("/");
      reset();
    } catch (error) {
      toast.error("Invalid Credentials");
      console.log("login error", error);
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginValidation) });

  return (
    <div className="px-[30px] sm:px-[15px] pt-[150px] pb-[60px] mx-auto w-full sm:w-[570px]">
      <h1 className="text-[25px] sm:text-[40px] text-center font-semibold font-WorkSans  text-[#2f2f2f] pb-8">
        Login
      </h1>
      <form className="space-y-6" onSubmit={handleSubmit(onLogin)}>
        {/* Email */}
        <div className="flex flex-col gap-2 relative">
          <label htmlFor="email" className="font-light">
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MdEmail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="email"
              type="text"
              autoComplete="email"
              placeholder="Email"
              {...register("email")}
              className={`appearance-none block w-full pl-10 pr-3 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#F28123] focus:border-[#F28123] sm:text-sm`}
            />
          </div>
          {errors.email && (
            <h1 className="text-red-600">{errors.email.message}</h1>
          )}
        </div>
        {/* password */}
        <div className="relative mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaLock className="h-5 w-5 text-gray-400" />
          </div>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="Password"
                  className={`appearance-none block w-full pl-10 pr-3 py-2 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#F28123] focus:border-[#F28123] sm:text-sm`}
                />
            {errors.password && (
              <h1 className="text-red-600">{errors.password.message}</h1>
            )}
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <FaEyeSlash className="h-5 w-5" />
              ) : (
                <FaEye className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-5">
          <button
            type="submit"
            className="mt-2 py-[10px] px-[35px] rounded-sm bg-primary
           text-white font-medium cursor-pointer"
          >
            {" "}
            {isLoading ? "loading" : "Login"}
          </button>

          <Link to="/register" className="underline font-light">
            New customer? Signup for an account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
