import { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  /*---------------state for shopping cart---------------*/
  const [cart, setCart] = useState({
    items: [],
    // itemsCount: 0,
    cartTotal: 0,
  });
  /*-------------------------X---------------------------*/

  /*---------Save Product Cart in localStorage-----------*/
  useEffect(() => {
    const shoppingcart = window.localStorage.getItem("cart");
    setCart(JSON.parse(shoppingcart));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  /*-----------------------X----------------------------*/

  /*---------function for calculate cart total----------*/
  const calculateCartTotal = (items) => {
    // const itemsCount = items.reduce((prev, curr) => prev + curr.qty, 0);
    const cartTotal = items.reduce(
      (prev, curr) => prev + curr.qty * curr.price,
      0
    );
    return { cartTotal };
  };
  /*-----------------------X----------------------------*/

  /*-----function for add product to shopping cart------*/
  const addToCart = (product) => {
    const { items = [] } = cart;
    const productIndex = items.findIndex((item) => item.id === product.id);
    if (productIndex === -1) {
      items.push({
        ...product,
        qty: 1,
      });
    } else {
      items[productIndex].qty++;
    }
    const total = calculateCartTotal(items);
    setCart({ items, ...total });
  };
  /*-----------------------X----------------------------*/

  /*---function for remove product from shopping cart---*/
  const removeFromCart = (product) => {
    const { items = [] } = cart;
    const productIndex = items.findIndex((item) => item.id === product.id);
    if (productIndex !== -1) {
      items.splice(productIndex, 1);
    }
    const total = calculateCartTotal(items);
    setCart({ items, ...total });
  };
  /*-----------------------X----------------------------*/

  /*-------function for increase Qty in cart list-------*/
  const addQty = (product) => {
    const { items = [] } = cart;
    const productIndex = items.findIndex((item) => item.id === product.id);
    items[productIndex].qty++;
    const total = calculateCartTotal(items);
    setCart({ items, ...total });
  };
  /*-----------------------X----------------------------*/

  /*-------function for decrease Qty in cart list-------*/
  const removeQty = (product) => {
    const { items = [] } = cart;
    const productIndex = items.findIndex((item) => item.id === product.id);
    items[productIndex].qty--;
    const total = calculateCartTotal(items);
    setCart({ items, ...total });
  };
  /*-----------------------X----------------------------*/

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        addQty,
        removeQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
