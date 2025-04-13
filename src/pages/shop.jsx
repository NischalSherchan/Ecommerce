import React, { useState } from "react";
import SmallBanner from "../component/smallBanner";
import "rc-pagination/assets/index.css";

import Pagination from "rc-pagination";
import ProductCard from "../component/ProductCard"
import { useGetProductQuery } from "../features/ProductApi";
const Shop = () => {
  
  
  const subTitle = "Fresh and organic";
  const title = "Shop";
  
  const [currentPage, SetCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const {data:ProductData, isLoading, isError} = useGetProductQuery({page:currentPage, limit:itemsPerPage})

  const handlePageChange = (page) => {
    SetCurrentPage(page);
  };

  
  console.log('dataa',ProductData)
  if(isLoading){
    return <p>loading.......</p>
  }
  if(isError){
    return <p>something went worng</p>
  }
  return (
    <>
      <SmallBanner title={title} subTitle={subTitle} />
      <main className="mycontainer py-[60px] space-y-9">
        <section className="grid grid-cols-3 gap-6 ">
        {
            ProductData?.data?.map((el, i) => (
              <ProductCard el={el} key={i} />
            ))
          }
        </section>
        <Pagination 
            className='flex justify-center text-primary bg-ar'
            current={currentPage}
            pageSize={itemsPerPage}
            total={ProductData?.total}
            onChange={handlePageChange}
        />
      </main>
    </>
  );
};

export default Shop;
