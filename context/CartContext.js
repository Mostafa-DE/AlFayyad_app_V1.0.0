import { useState, createContext, useEffect, useRef } from "react";
// import cookie from "js-cookie";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    items: [],
    itemsCount: 0,
    cartTotal: 0,
  });

  /*---------Save Product Cart in localStorage-----------*/
  useEffect(() => {
    const shoppingcart = window.localStorage.getItem("cart");
    setCart(JSON.parse(shoppingcart));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  /*-----------------------X----------------------------*/

  const calculateCartTotal = (items) => {
    const itemsCount = items.reduce((prev, curr) => prev + curr.qty, 0);
    const cartTotal = items.reduce(
      (prev, curr) => prev + curr.qty * curr.price,
      0
    );
    return { itemsCount, cartTotal };
  };
  const addToCart = (product) => {
    const { items = [] } = cart;
    // console.log(items);

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

    // console.log(total);
  };

  const removeFromCart = (product) => {
    const { items = [] } = cart;
    const productIndex = items.findIndex((item) => item.id === product.id);
    if (productIndex !== -1) {
      items.splice(productIndex, 1);
    }
    const total = calculateCartTotal(items);
    setCart({ items, ...total });
    // cookie.remove("shoppingCart");
  };

  const addQty = (product) => {
    const { items = [] } = cart;
    const productIndex = items.findIndex((item) => item.id === product.id);
    items[productIndex].qty++;
    const total = calculateCartTotal(items);
    setCart({ items, ...total });
  };

  const removeQty = (product) => {
    const { items = [] } = cart;
    const productIndex = items.findIndex((item) => item.id === product.id);
    // const checkProductQty = items.find((item) => item.qty === 0);
    items[productIndex].qty--;

    const total = calculateCartTotal(items);
    setCart({ items, ...total });
  };

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
