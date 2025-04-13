export const setUser = (user)=>{
    console.log("set user to localstorage");
    
    localStorage.setItem("user",JSON.stringify(user))
}

export const getUser=()=>{
    const data = localStorage.getItem("user")
    return data === null ? null : JSON.parse(data)
}

export const clearAllData = ()=>{
    localStorage.clear()
}

export const setCart = (carts) =>{
    localStorage.setItem("carts", JSON.stringify(carts));
};

export const getCart = ()=>{
    const carts = localStorage.getItem("carts");
    const cartData = carts === null ? [] : JSON.parse(carts);
    console.log('stiragecart', cartData)
    return cartData
}

export const cartClear = () => {
    localStorage.removeItem('carts')
};