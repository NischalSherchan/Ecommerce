import React from "react";
import ProductCard from "./ProductCard";
import { useGetProductQuery } from "../features/ProductApi";
import { useNavigate } from "react-router-dom";


const OurProduct = () => {
  const nav = useNavigate()
 const { data:productData , isLoading, isError } = useGetProductQuery({ page: 1, limit: 3 });
  console.log(productData, "product log");
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error something went worng</p>;
  }
  console.log(productData);
  return (
    <div>
      <div className="w-[100vw] my-[100px]">
        <h3 className="text-center text-[40px] font-bold">
          <span className="text-[#F28123]">Our</span> Products
        </h3>
        <div className=" w-[100vw]  flex justify-center">
          <p className="bg-[#F28123] underline h-[2px] w-[50px] "></p>
        </div>
        <p className="my-[30px] text-center leading-5%">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          fuga quas
          <br /> itaque eveniet beatae optio.
        </p>
      </div>

      <div className="flex flex-col gap-6 mycontainer justify-center items-center md:flex-row ">
        {productData?.data.map((el, i) => (
          <ProductCard el={el} key={i} />
        ))}
      </div>
      <div className="mt-[20px] flex justify-center">
      <button
  onClick={() => nav('/shop')}
  className="bg-primary text-white text-base font-semibold rounded-full py-2.5 px-6 mt-7 md:px-5 shadow-md transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-lg active:scale-100"
>
  See more 
</button>

      </div>

    </div>
  );
};

export default OurProduct;
