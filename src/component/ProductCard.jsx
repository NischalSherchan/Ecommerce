import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addOrUpdateCart } from "../features/cartSlice";




const ProductCard = ({ el }) => {
  const baseUrl = import.meta.env.VITE_BASE_URL
  const dispatch = useDispatch()
  const nav= useNavigate()

  console.log(el,"adsf")
  console.log('baseurl', baseUrl);
console.log('imhhg', el?.image)  
  return (
    <div className="px-[30px] py-[20px]  flex flex-col items-center gap-[10px] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),4px_0_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1),-4px_0_6px_-1px_rgba(0,0,0,0.1)] hover:shadow-none">
      <img
        src={`${baseUrl}${el?.image}`}
        alt="image"
        width={261}
        height={261}
        className="size-[261px] object-cover"
      />
      <h2 className="text-[20px] font-semibold leading-[2.25rem]">{el?.title}</h2>
      <p className="text-[#555] text-[15px]">Per Kg</p>
      <h1 className="text-[30px] font-bold leading-[180%]">${el?.price}</h1>
      <button
        onClick={()=>
        {
         
          dispatch(
          addOrUpdateCart({
            name:el?.title,
            quantity:Number(1),
            image:el?.image,
            price:el?.price,
            product:el?._id,
            countInStock:el?.in_stock,
          })
        )
          console.log('prod added');
        }}
       className="bg-primary text-body flex items-center gap-3 rounded-[50px] py-[10px] px-[30px] hover:bg-transparent hover:border hover:border-[#F28123] hover:text-[#F28123] transition-all duration-300 cursor-pointer md:px-[20px] ">
        <FaShoppingCart /> Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
