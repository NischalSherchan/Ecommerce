import { FaShoppingCart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { removeCart } from "../features/cartSlice";
import { useState } from "react";

const Cart = ({ onClose }) => {
  const cartsData = useSelector((store) => store?.cartData?.carts);
  console.log(cartsData,'iaub')
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const dispatch = useDispatch();
  const navigate = useNavigate();
   console.log(cartsData,'oiaifoasoand')
  const handleClose = () => onClose();
  const deleteCartItem = (item) => dispatch(removeCart(item));
// Assuming you want to track quantity for a single product
const [quantities, setQuantities] = useState(() =>
  cartsData.reduce((acc, item) => {
    acc[item.product] = item.quantity || 1; // Set initial quantity to 1 if undefined
    return acc;
  }, {})
);


// Or if you want to track quantities for all items in cart:
// const [quantities, setQuantities] = useState(cartsData.map(item => item.quantity || 1));

// Increment the quantity of a specific product
const handleQuantityIncrement = (itemId, maxStock) => {
  setQuantities(prev => ({
    ...prev,
    [itemId]: Math.min((prev[itemId] || 0) + 1, maxStock) // Safely increment, ensuring quantity doesn't exceed max stock
  }));
};

// Decrement the quantity of a specific product (ensure it never goes below 1)
const handleQuantityDecrement = (itemId) => {
  setQuantities(prev => ({
    ...prev,
    [itemId]: Math.max((prev[itemId] || 1) - 1, 1) // Prevent going below 1
  }));
};



const total = cartsData.reduce((acc, item) => 
  acc + ((quantities[item.product] || 0) * (item.price || 0)), 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Semi-transparent overlay */}
      <div 
        className="absolute inset-0 bg-opacity-90 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Cart Panel with glass morphism effect */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white bg-opacity-90 backdrop-blur-lg shadow-xl transform transition-all ease-in-out duration-300 flex flex-col border-l border-white border-opacity-20">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white border-opacity-20">
          <h1 className="text-2xl font-bold text-gray-800">Your Cart</h1>
          <button 
            onClick={handleClose}
            className="text-gray-600  hover:text-gray-900 focus:outline-none transition-colors"
          >
            <RxCross2 className="h-6 w-6" />
          </button>
        </div>

        {/* Empty State */}
        {cartsData.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-white bg-opacity-50">
            <FaShoppingCart className="h-16 w-16 text-gray-400 mb-4" />
            <h2 className="text-xl font-bold text-gray-700 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Start shopping to add items to your cart</p>
            <button
              onClick={() => navigate("/shop")}
              className="px-6 py-3 bg-orange-500 bg-opacity-90 text-white font-medium rounded-full hover:bg-orange-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 bg-white bg-opacity-70">
              {cartsData.map((item, index) => (
               
                <div key={index} className="flex items-start py-4 border-b border-white border-opacity-20 last:border-0">
                {console.log(item,'cart item')}
                  <img
                    className="w-20 h-20 object-cover rounded-md flex-shrink-0 border border-white border-opacity-30"
                    src={`${baseUrl}${item?.image}`}
                    alt={item?.name}
                  />
                  
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-medium text-gray-800">{item?.name}</h3>
                      <button  
                        onClick={()=>deleteCartItem(item?.product)}
                        className="text-gray-500 hover:text-red-500 transition-colors"
                      >
                        <RxCross2 className="h-5 w-5" />
                      </button>
                    </div>
                    
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center border border-white border-opacity-30 rounded-md bg-white bg-opacity-50">
                     
                        <button className="px-3 py-1 text-gray-600 hover:bg-white hover:bg-opacity-30" onClick={() => handleQuantityDecrement(item.product)}>-</button>
                        <span className="px-3 py-1 text-gray-600">{quantities[item.product] ?? 1}</span>
                        <button className="px-3 py-1 text-gray-600 hover:bg-white hover:bg-opacity-30" onClick={() => handleQuantityIncrement(item.product, item.countInStock)}>+</button>
                      </div>
                      <p className="text-lg font-medium text-gray-900">${item?.price.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-white border-opacity-20 p-6 bg-white bg-opacity-80 backdrop-blur-sm">
              <div className="flex justify-between py-4 text-lg">
                <span className="font-medium text-gray-700">Subtotal</span>
                <span className="font-bold text-gray-900">${total.toFixed(2)}</span>
              </div>
              
              <div className="space-y-3">
                <NavLink 
                  to="/cart" 
                  onClick={handleClose}
                  className="block w-full px-6 py-3 text-center bg-white bg-opacity-70 text-gray-800 font-medium rounded-md hover:bg-opacity-90 transition-all border border-white border-opacity-30"
                >
                  View Cart
                </NavLink>
                
                <button
                  onClick={() => {
                    handleClose();
                    navigate("/checkout");
                  }}
                  className="w-full px-6 py-3 bg-orange-500 bg-opacity-90 text-white font-medium rounded-md hover:bg-orange-600 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;