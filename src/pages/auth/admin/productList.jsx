import React, { useState } from "react";
import {
  useDeleteProductMutation,
  useGetProductQuery,
} from "../../../features/ProductApi";
import { MdDelete } from "react-icons/md";
import SmallBanner from "../../../component/smallBanner";
import { FaEdit } from "react-icons/fa";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const TABLE_HEAD = ["Products", "Price", "Created At", "Edit", "Delete"];
const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const token = useSelector((store) => store?.userInfo?.user?.accessToken);
  console.log(token, "user token");
  const pageSize = 6;
  const baseUrl = `${import.meta.env.VITE_BASE_URL}`;
  const {
    data: products,
    isLoading,
    isError,
    isFetching,
  } = useGetProductQuery({ page: currentPage, limit: pageSize });
  const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();
  console.log(products, "product list");

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    console.log("date", date);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDeleteBox = () => {
    setOpen(false);
    setDeleteConfirm(null);
  };

  const handleDelete = async (id) => {
    if (!token) {
      toast.error("Authentication required");
      return;
    }

    try {
      console.log("Deleting product ID:", id);
      await deleteProduct({ id, token }).unwrap();
      toast.success("Product deleted successfully");
      setDeleteConfirm(null);
    } catch (error) {
      console.error("Delete error:", error);
      toast.error(error.data?.message || "Failed to delete product");
    }
  };

  const title = "Product List";
  const subtitle = "All Products";
  return (
    <div>
      <SmallBanner title={title} subTitle={subtitle} />

      <div className="container mx-auto px-4 ">
        {/* Header */}
        <div className="mt-8 mb-6 flex flex-col-reverse items-start lg:flex-row lg:items-center justify-between gap-5">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Product List</h2>
            <p className="mt-1 text-gray-500">
              See information about all products
            </p>
          </div>
          <button
            onClick={() => navigate("/addProduct")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
            </svg>
            Add Product
          </button>
        </div>
      </div>
      {isFetching && <div>Loading page {currentPage}...</div>}
      {/* product list section */}
      <div className="bg-white rounded-xl shadow-md w-full my-5 overflow-hidden">
        <div className="overflow-x-auto h-[500px]">
          {/* table */}
          <table className="w-full min-w-full table-auto text-left">
            {/* table header title */}
            <thead className="sticky top-0 z-10 bg-gray-50 border-b border-gray-200">
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            {/* table body */}
            <tbody className="divide-y divide-gray-100">
              {!isLoading ? (
                <>
                  {products?.data.length > 0 ? (
                    products?.data.map(
                      ({ image, title, createdAt, _id, price }) => (
                        <tr
                          ket={_id}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                                <img
                                  src={`${baseUrl}${image}`}
                                  alt={title}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <span className="text-sm font-medium text-gray-800">
                                {title}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm font-medium text-gray-800">
                              Rs.{price}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-600">
                              {formatDate(createdAt)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button
                              onClick={() => navigate(`/update-product/${_id}`)}
                              className="p-2 rounded-full hover:bg-blue-50 transition-colors text-blue-600"
                              title="Edit Product"
                            >
                              <FaEdit />
                            </button>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button
                              onClick={() => {
                                setDeleteConfirm(_id);
                              }}
                              className="p-2 rounded-full hover:bg-red-50 transition-colors text-red-600"
                              title="Remove Product"
                            >
                              <MdDelete />
                            </button>
                            {deleteConfirm && (
                              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                                <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
                                  <h3 className="text-lg font-medium mb-4 text-center">
                                    Confirm Deletion
                                  </h3>
                                  <p className="mb-6 text-center">
                                    Are you sure? This action cannot be undone.
                                  </p>
                                  <div className="flex justify-center space-x-3">
                                    <button
                                      onClick={handleDeleteBox}
                                      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                                    >
                                      Cancle
                                    </button>
                                    <button onClick={()=> handleDelete(deleteConfirm)}
                                     className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                                     >
                                      Delete
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}
                          </td>
                        </tr>
                      )
                    )
                  ) : (
                    <tr>
                      <td colSpan={5} className="px-6 py-10 text-center">
                        <span className="text-xl font-bold text-gray-400">
                          Sorry, no products found
                        </span>
                      </td>
                    </tr>
                  )}
                </>
              ) : (
                <h1></h1>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center">
        <Pagination
          current={currentPage}
          total={products?.total}
          pageSize={pageSize}
          onChange={handlePageChange}
          showSizeChanger={false}
          disabled={isFetching}
        />
      </div>
    </div>
  );
};

export default ProductList;
