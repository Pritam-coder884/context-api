import React from "react";
import { createContext, useContext, useState } from "react";
import { faker } from "@faker-js/faker";
const Cart = createContext();
faker.seed(100);

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  const productsArray = [...Array(20)].map((p) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    // avatar: faker.image.avatar(),
    image: `${faker.image.nature()}?random=${Math.round(Math.random() * 1000)}`,
  }));
  //   console.log(productsArray);
  const [products]=useState(productsArray);

  return(
    <Cart.Provider value={{cart,setCart,products}}>
        {children}
    </Cart.Provider>
  );
};
export const CartState=()=>{
    return useContext(Cart);
}
export default Context;
