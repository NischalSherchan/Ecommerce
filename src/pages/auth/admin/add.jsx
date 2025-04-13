// import React, { useState } from "react";
// import { useGetProductQuery } from "../../../features/ProductApi";
// import { FiEdit2 } from "react-icons/fi";
// import { MdDelete } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import SmallBanner from "../../../component/smallBanner";


// const TABLE_HEAD = ["Products", "Price", "Created At", "Edit", "Delete"];

// const ProductList = () => {
//   const   baseUrl =  `${import.meta.env.VITE_BASE_URL}`
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const [productToDelete, setProductToDelete] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(6);
  
//   const { 
//     data: response = { data: [], page: 1, perPage: 6, total: 0 }, 
//     isLoading, 
//     isError 
//   } = useGetProductQuery({ page: currentPage, limit: itemsPerPage });

//   const { data: products = [], page, perPage, total } = response;
//   const totalPages = Math.ceil(total / perPage);

//   const title = "Product List";
//   const subtitle = "All Products";

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString();
//   };

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   if (isError) {
//     return (
//       <div className="container mx-auto px-4 py-8">
//         <SmallBanner title={title} subTitle={subtitle} />
//         <div className="text-center py-10">
//           <h3 className="text-xl font-medium text-red-500">
//             Error loading products. Please try again later.
//           </h3>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <SmallBanner title={title} subTitle={subtitle} />

//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="mt-8 mb-6 flex flex-col-reverse items-start lg:flex-row lg:items-center justify-between gap-5">
//           <div>
//             <h2 className="text-2xl font-bold text-gray-800">Product List</h2>
//             <p className="mt-1 text-gray-500">
//               Showing {products.length} of {total} products
//             </p>
//           </div>
//           <button
//             onClick={() => navigate("/addProduct")}
//             className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors flex items-center gap-2"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
//             </svg>
//             Add Product
//           </button>
//         </div>
//       </div>

//       {/* Product list section */}
//       <div className="container mx-auto px-4">
//         <div className="bg-white rounded-xl shadow-md w-full my-5 overflow-hidden">
//           {isLoading ? (
//             <div className="flex justify-center items-center h-[500px]">
      
//             </div>
//           ) : (
//             <>
//               <div className="overflow-x-auto h-[500px]">
//                 <table className="w-full min-w-full table-auto text-left">
//                   <thead className="sticky top-0 z-10 bg-gray-50 border-b border-gray-200">
//                     <tr>
//                       {TABLE_HEAD.map((head) => (
//                         <th
//                           key={head}
//                           className="px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider"
//                         >
//                           {head}
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-100">
//                     {products.length > 0 ? (
//                       products.map((product) => (
//                         <tr key={product._id} className="hover:bg-gray-50 transition-colors">
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="flex items-center gap-3">
//                               <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
//                                 <img 
//                                   src={`${baseUrl}${product.image}`}
//                                   alt={product.title} 
//                                   className="h-full w-full object-cover"
//                                   onError={(e) => {
//                                     e.target.onerror = null;
//                                     e.target.src = "/placeholder-product.png";
//                                   }}
//                                 />
//                               </div>
//                               <span className="text-sm font-medium text-gray-800">
//                                 {product.title}
//                               </span>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <span className="text-sm font-medium text-gray-800">
//                               Rs.{product.price}
//                             </span>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <span className="text-sm text-gray-600">
//                               {formatDate(product.createdAt)}
//                             </span>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <button
//                               onClick={() => navigate(`/editProduct/${product._id}`)}
//                               className="p-2 rounded-full hover:bg-blue-50 transition-colors text-blue-600"
//                               title="Edit Product"
//                             >
//                               <FiEdit2 />
//                             </button>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <button
//                               onClick={() => {
//                                 setOpen(true);
//                                 setProductToDelete({
//                                   id: product._id,
//                                   name: product.title
//                                 });
//                               }}
//                               className="p-2 rounded-full hover:bg-red-50 transition-colors text-red-600"
//                               title="Remove Product"
//                             >
//                               <MdDelete />
//                             </button>
//                           </td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td colSpan={5} className="px-6 py-10 text-center">
//                           <span className="text-xl font-bold text-gray-400">
//                             No products found
//                           </span>
//                         </td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               </div>
              
          
//             </>
//           )}
//         </div>
//       </div>

     
//     </div>
//   );
// };

// export default ProductList;