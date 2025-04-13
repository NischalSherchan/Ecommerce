import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/rootLayout.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Gallery from "./pages/gallery.jsx";
import Contact from "./pages/contact.jsx";
import Shop from "./pages/shop.jsx"
import Login from "./pages/auth/Login.jsx";
import { Provider } from "react-redux";
import { store } from "./features/store.js";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Register from "./pages/auth/register.jsx";
import UserRoutes from "./component/RoutesController.jsx";
import Cart from "./pages/userPage/Cart.jsx";
import ShopDetail from "./pages/shopDetail.jsx";
import AddProduct from "./pages/auth/admin/addProduct.jsx";
import ProductList from "./pages/auth/admin/productList.jsx";
import AdminRoutes from "./component/adminRoutes.jsx";
import UpdateProduct from "./pages/auth/admin/update.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path:'shop/:id',
        element:<ShopDetail/>
      },
      {
        element: <CheckoutPage />,
        path: '/checkout'
      },
      {
        element:<UserRoutes />,
        children:[
          {
            path:'login',
            element:<Login />
          },
          {
            path: "Register",
            element: <Register />,
          },
        ]
      },
      {
        path: "Cart",
        element: <Cart />,
      },
      {
        element:<AdminRoutes />,
        children:[
          {
            path:'addProduct/',
            element:<AddProduct/>
          },
          {
            path:'productlist/',
            element:<ProductList/>
          },
          {
            path: "update-product/:id",
            element: <UpdateProduct />
          },
        ]
      }
     
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <ToastContainer autoClose={1000} />
  <RouterProvider router={router} />
  </Provider>
);
