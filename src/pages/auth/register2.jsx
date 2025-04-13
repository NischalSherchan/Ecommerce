// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx';
// import { Link } from 'react-router-dom';
// import { useRegisterMutation } from '../../features/authApi';
// import { useDispatch } from 'react-redux';
// import { setUserToLocal } from '../../features/UserSlice';
// import { toast } from 'react-toastify';

// const Register = () => {
//     const dispatch = useDispatch()
//     const [userRegister, {isLoading}] = useRegisterMutation()
//   const [showPassword, setShowPassword] = useState(false);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const onSubmit =async (data) => {
//   try {
//       const res = await userRegister(data).unwrap()
//       console.log(res)
//        dispatch(setUserToLocal(res))
//       toast.success("register successful")
//       nav('/login')
      
//   } catch (error) {
//     toast.error('error')
//   }
 
//   };

//   return (
//     <div className="px-[30px] sm:px-[15px] pt-[150px] pb-[60px] mx-auto w-full sm:w-[570px]">
//       <h1 className="text-[25px] sm:text-[40px] text-center font-semibold font-WorkSans text-[#2f2f2f] pb-8">
//         Register
//       </h1>
//       <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
//         {/* Name Field */}
//         <div className="flex flex-col gap-2">
//           <label className="font-light">Full Name</label>
//           <input
//             type="text"
//             className={`form-input ${errors.name ? 'border-red-500' : 'focus:ring-2 focus:ring-[#F28123] focus:border-[#F28123]'}`}
//             placeholder="Your full name"
//             {...register("name")}
//           />

//         </div>

//         {/* Email Field */}
//         <div className="flex flex-col gap-2">
//           <label className="font-light">Email</label>
//           <input
//             type="email"
//             className={`form-input ${errors.email ? 'border-red-500' : 'focus:ring-2 focus:ring-[#F28123] focus:border-[#F28123]'}`}
//             placeholder="Your email"
//             {...register("email")}
//           />
//         </div>

//         {/* Password Field */}
//         <div className="relative mb-4">
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//             Password
//           </label>
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               id="password"
//               placeholder="Create password"
//               className={`form-input w-full pr-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F28123] focus:border-[#F28123] ${
//                 errors.password ? 'border-red-500' : ''
//               }`}
//               {...register("password")}
//             />
//             <button
//               type="button"
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
//               onClick={togglePasswordVisibility}
//               aria-label={showPassword ? "Hide password" : "Show password"}
//             >
//               {showPassword ? (
//                 <RxEyeClosed className="h-5 w-5" />
//               ) : (
//                 <RxEyeOpen className="h-5 w-5" />
//               )}
//             </button>
//           </div>
//           {errors.password && (
//             <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
//           )}
//         </div>

//         {/* Confirm Password Field */}
//         <div className="relative mb-4">
//           <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
//             Confirm Password
//           </label>
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               id="confirmPassword"
//               placeholder="Confirm your password"
//               className={`form-input w-full pr-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F28123] focus:border-[#F28123] ${
//                 errors.confirmPassword ? 'border-red-500' : ''
//               }`}
//               {...register("confirmPassword", { 
//                 required: 'Please confirm your password'
//               })}
//             />
//             <button
//               type="button"
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
//               onClick={togglePasswordVisibility}
//               aria-label={showPassword ? "Hide password" : "Show password"}
//             >
//               {showPassword ? (
//                 <RxEyeClosed className="h-5 w-5" />
//               ) : (
//                 <RxEyeOpen className="h-5 w-5" />
//               )}
//             </button>
//           </div>
//           {errors.confirmPassword && (
//             <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
//           )}
//         </div>

//         <div className="w-full flex flex-col items-center gap-5">
//           <button
//             type="submit"
//             className="mt-2 py-[10px] px-[35px] rounded-sm bg-[#F28123] text-white font-medium hover:bg-[#e07a20] transition-colors"
//           >
//             Create Account
//           </button>

//           <div className="text-center">
//             <p className="font-light">
//               Already have an account?{' '}
//               <Link to="/login" className="underline text-[#F28123] hover:text-[#e07a20]">
//                 Login here
//               </Link>
//             </p>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Register;

// import React, { useState, useRef } from "react";
// import { MdEmail } from "react-icons/md";
// import { FaLock, FaUser, FaEyeSlash, FaEye } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";
// import { useRegisterMutation } from "../../features/authApi";
// import { setUserToLocal } from "../../features/UserSlice";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// // Validation Schema
// export const registerValidation = yup.object({
//   name: yup
//     .string()
//     .min(2, 'Name must be at least 2 characters')
//     .max(50, 'Name must not exceed 50 characters')
//     .matches(/^[a-zA-Z\s]*$/, 'Name can only contain letters and spaces')
//     .required('Full name is required'),
//   email: yup
//     .string()
//     .email('Please enter a valid email address')
//     .required('Email is required'),
//   password: yup
//     .string()
//     .min(8, 'Password must be at least 8 characters')
//     .max(32, 'Password must not exceed 32 characters')
//     .matches(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//       'Password must contain at least: 1 uppercase, 1 lowercase, 1 number, 1 special character'
//     )
//     .required('Password is required'),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref('password'), null], 'Passwords must match')
//     .required('Please confirm your password'),
//   profile_pic: yup
//     .mixed()
//     .required('Profile picture is required')
//     .test(
//       'fileSize',
//       'File too large (max 2MB)',
//       value => value && value[0]?.size <= 2000000
//     )
//     .test(
//       'fileType',
//       'Only JPEG or PNG images are accepted',
//       value => value && ['image/jpeg', 'image/png'].includes(value[0]?.type)
//     )
// });

// const Register = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [previewImage, setPreviewImage] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const fileInputRef = useRef(null);
  
//   const [register] = useRegisterMutation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const {
//     register: registerForm,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     watch,
//     setValue,
//     trigger
//   } = useForm({
//     resolver: yupResolver(registerValidation),
//     mode: "onBlur"
//   });

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setValue("profile_pic", e.target.files);
//       trigger("profile_pic");
      
//       // Create preview
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreviewImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const onSubmit = async (data) => {
//     setIsLoading(true);
//     const formData = new FormData();
//     formData.append('name', data.name);
//     formData.append('email', data.email);
//     formData.append('password', data.password);
//     formData.append('profile_pic', data.profile_pic[0]);

//     try {
//       const res = await register(formData).unwrap();
//       dispatch(setUserToLocal(res));
//       toast.success(`Welcome ${res.name}! Registration successful`);
//       reset();
//       navigate("/");
//     } catch (error) {
//       toast.error(error?.data?.message || "Registration failed. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div className="text-center">
//           <h2 className="text-3xl font-extrabold text-gray-900">Create Account</h2>
//           <p className="mt-2 text-sm text-gray-600">
//             Already have an account?{" "}
//             <button
//               onClick={() => navigate("/login")}
//               className="font-medium text-[#f28123] hover:text-[#da7420] focus:outline-none"
//             >
//               Login
//             </button>
//           </p>
//         </div>

//         <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6" encType="multipart/form-data">
//           <div className="rounded-md shadow-sm space-y-4">
//             {/* Profile Picture */}
//             <div>
//               <label htmlFor="profile_pic" className="block text-sm font-medium text-gray-700 mb-2">
//                 Profile Picture
//               </label>
//               <div className="flex items-center space-x-4">
//                 <div className="relative">
//                   {previewImage ? (
//                     <img 
//                       src={previewImage} 
//                       alt="Preview" 
//                       className="h-16 w-16 rounded-full object-cover border-2 border-gray-300"
//                     />
//                   ) : (
//                     <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
//                       <FaUser className="h-8 w-8 text-gray-400" />
//                     </div>
//                   )}
//                 </div>
//                 <div className="flex-1">
//                   <input
//                     id="profile_pic"
//                     type="file"
//                     accept="image/jpeg, image/png"
//                     ref={fileInputRef}
//                     onChange={handleImageChange}
//                     className="hidden"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => fileInputRef.current.click()}
//                     className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F28123]"
//                   >
//                     Choose Image
//                   </button>
//                   <p className="mt-1 text-xs text-gray-500">
//                     JPEG or PNG (Max 2MB)
//                   </p>
//                   {errors.profile_pic && (
//                     <p className="mt-1 text-sm text-red-600">{errors.profile_pic.message}</p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Name Field */}
//             <div>
//               <label htmlFor="name" className="sr-only">
//                 Full Name
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaUser className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   id="name"
//                   {...registerForm("name")}
//                   type="text"
//                   autoComplete="name"
//                   placeholder="Full Name"
//                   className={`appearance-none block w-full pl-10 pr-3 py-2 border ${
//                     errors.name ? "border-red-500" : "border-gray-300"
//                   } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#F28123] focus:border-[#F28123] sm:text-sm`}
//                 />
//               </div>
//               {errors.name && (
//                 <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
//               )}
//             </div>

//             {/* Email Field */}
//             <div>
//               <label htmlFor="email" className="sr-only">
//                 Email
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <MdEmail className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   id="email"
//                   {...registerForm("email")}
//                   type="email"
//                   autoComplete="email"
//                   placeholder="Email"
//                   className={`appearance-none block w-full pl-10 pr-3 py-2 border ${
//                     errors.email ? "border-red-500" : "border-gray-300"
//                   } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#F28123] focus:border-[#F28123] sm:text-sm`}
//                 />
//               </div>
//               {errors.email && (
//                 <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
//               )}
//             </div>

//             {/* Password Field */}
//             <div>
//               <label htmlFor="password" className="sr-only">
//                 Password
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaLock className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   id="password"
//                   {...registerForm("password")}
//                   type={showPassword ? "text" : "password"}
//                   autoComplete="new-password"
//                   placeholder="Password"
//                   className={`appearance-none block w-full pl-10 pr-3 py-2 border ${
//                     errors.password ? "border-red-500" : "border-gray-300"
//                   } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#F28123] focus:border-[#F28123] sm:text-sm`}
//                 />
//                 <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="text-gray-400 hover:text-gray-500 focus:outline-none"
//                   >
//                     {showPassword ? (
//                       <FaEyeSlash className="h-5 w-5" />
//                     ) : (
//                       <FaEye className="h-5 w-5" />
//                     )}
//                   </button>
//                 </div>
//               </div>
//               {errors.password && (
//                 <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
//               )}
//             </div>

//             {/* Confirm Password Field */}
//             <div>
//               <label htmlFor="confirmPassword" className="sr-only">
//                 Confirm Password
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaLock className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   id="confirmPassword"
//                   {...registerForm("confirmPassword")}
//                   type={showConfirmPassword ? "text" : "password"}
//                   autoComplete="new-password"
//                   placeholder="Confirm Password"
//                   className={`appearance-none block w-full pl-10 pr-3 py-2 border ${
//                     errors.confirmPassword ? "border-red-500" : "border-gray-300"
//                   } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#F28123] focus:border-[#F28123] sm:text-sm`}
//                 />
//                 <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
//                   <button
//                     type="button"
//                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                     className="text-gray-400 hover:text-gray-500 focus:outline-none"
//                   >
//                     {showConfirmPassword ? (
//                       <FaEyeSlash className="h-5 w-5" />
//                     ) : (
//                       <FaEye className="h-5 w-5" />
//                     )}
//                   </button>
//                 </div>
//               </div>
//               {errors.confirmPassword && (
//                 <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
//               )}
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div>
//             <button
//               type="submit"
//               disabled={isLoading}
//               className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#F28123] hover:bg-[#da7420] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F28123] transition-colors duration-200 ${
//                 isLoading ? "opacity-70 cursor-not-allowed" : ""
//               }`}
//             >
//               {isLoading ? (
//                 <>
//                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Registering...
//                 </>
//               ) : (
//                 "Register"
//               )}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;