import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const OurProduct = () => {
  const productData = [
    {
      img: "https://images.pexels.com/photos/51958/oranges-fruit-vitamins-healthy-eating-51958.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "$100",
      name: "Orange",
    },
    {
      img: "https://images.pexels.com/photos/51958/oranges-fruit-vitamins-healthy-eating-51958.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "$1",
      name: "Orange",
    },
    {
      img: "https://images.pexels.com/photos/51958/oranges-fruit-vitamins-healthy-eating-51958.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "$1",
      name: "Orange",
    },
  ];

  return (
    <>
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
      <div className="flex flex-col gap-6 mycontainer justify-center items-center md:flex-row " >
        {productData.map((ele) => (
          <>
            <div className="w-[350px] h-[545px] px-[30px] pt-[30px]  text-center rounded  shadow-outline shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),4px_0_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1),-4px_0_6px_-1px_rgba(0,0,0,0.1)] hover:shadow-none">
              <div className="w-[350px] h-[310] mb-[20px]">
                <img src={ele.img} width="300px" alt="fruits" />
              </div>
              <div className="pl-[30px] flexd col justify-center items-center">
                <h3 className="text-center mb-[10px]  font-semibold text-3xl ">
                  {ele.name}
                </h3>
                <h2 className="text-center ">
                  <span className="font-bold">Per Kg</span> <br />
                  <span className="font-black text-4xl block mt-2.5 mb-6">
                    {ele.price}
                  </span>
                </h2>
                <div className="ml-[20%]">
                  <button className="bg-[#F28123] py-[13px] px-[20px] rounded-full flex justify-center items-center gap-2">
                    <FaShoppingCart />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default OurProduct;
