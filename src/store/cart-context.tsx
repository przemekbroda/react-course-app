import React from "react";

const CartContext = React.createContext<{items: any[], totalAmount: number, addItems: (item: any) => void, removeItem: (id: string) => void}>({
  items: [],
  totalAmount: 0,
  addItems: (item: any) => {},
  removeItem: (id) => {},
});

export default CartContext;