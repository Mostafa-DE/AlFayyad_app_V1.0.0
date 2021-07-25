import { useState, createContext } from "react";

export const WishContext = createContext();

export const WishProvider = ({ children }) => {
  const [wishProduct, setWishProduct] = useState({
    items: [],
    itemsCount: 0,
  });

  const calculateWishListTotal = (items) => {
    const itemsCount = items.reduce((prev, curr) => prev + curr.qty, 0);
    return { itemsCount };
  };

  const addToWishList = (product) => {
    const { items = [] } = wishProduct;
    const productIndex = items.findIndex((item) => item.id === product.id);
    if (productIndex === -1) {
      items.push({
        ...product,
        qty: 1,
      });
    } else {
      items[productIndex].qty++;
    }
    const total = calculateWishListTotal(items);
    console.log(total);
    setWishProduct({ items, ...total });
  };

  const removeFromWishList = (product) => {
    const { items = [] } = wishProduct;
    const productIndex = items.findIndex((item) => item.id === product.id);
    if (productIndex !== -1) {
      items.splice(productIndex, 1);
    }
    const total = calculateWishListTotal(items);
    setWishProduct({ items, ...total });
  };

  return (
    <WishContext.Provider
      value={{ wishProduct, addToWishList, removeFromWishList }}
    >
      {children}
    </WishContext.Provider>
  );
};
