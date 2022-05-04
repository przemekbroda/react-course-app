import { ReactNode, useContext, useReducer, useState } from "react";
import CartContext from "./cart-context";

export interface CartProviderProps {
  children?: ReactNode
}

enum CartActionType {
  ADD_ITEM,
  REMOVE_ITEM
}

type CartAction = 
  {type: CartActionType.ADD_ITEM; item: any} 
  | {type: CartActionType.REMOVE_ITEM; id: string}

export interface CartState {
  items: any[];
  totalAmount: number;
}

const defaultCartState: CartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state: CartState, action: CartAction) => {
  if (action.type === CartActionType.ADD_ITEM) {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  } else if (action.type === CartActionType.REMOVE_ITEM) {
    const removedItem = state.items.find(i => i.id === action.id)!!;
    const updatedItems = state.items.filter(i => i.id !== action.id);
    const updatedTotalAmount = state.totalAmount - removedItem.price * removedItem.amount
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  return defaultCartState;
}

export default function CartProvider(props: CartProviderProps) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  function addItems(item: any) {
    dispatchCartAction({type: CartActionType.ADD_ITEM, item: item});
  }

  function removeItem(id: string) {
    dispatchCartAction({type: CartActionType.REMOVE_ITEM, id: id});
  }

  return <CartContext.Provider value={{
    items: cartState.items, 
    addItems: addItems, 
    removeItem: removeItem,
    totalAmount: cartState.totalAmount}
  }>
    {props.children}
  </CartContext.Provider>
}

export function useCart() {
  return useContext(CartContext);
}