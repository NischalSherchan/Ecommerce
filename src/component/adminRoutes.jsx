import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const AdminRoutes = () => {
  const admin = useSelector((store)=>store?.userInfo?.user?.data?.isAdmin)
  console.log(admin)
  return admin ? <Outlet /> :  <Navigate to='/' replace />
}

export default AdminRoutes