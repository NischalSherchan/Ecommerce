import React, { useLayoutEffect } from "react";
import Header from "../component/header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../component/footer";

const RootLayout = () => {
  const pathName = useLocation().pathname;
  console.log(pathName)
  useLayoutEffect(()=>{
    document.documentElement.scrollTo({top:0,behavior:'instant'})
  },[pathName])
  return (
    <>
 
 {pathName !== '/login' && pathName !== '/register' && <Header />}
      <Outlet />
      {pathName !== '/login' && pathName !==  '/register' && <Footer />}
    </>
  );
};

export default RootLayout;
