import { CartContext } from './cart-context';
import { useReducer } from 'react';
export const CartProvider = (props) => {
  const defaultCartState = {
    items: [],
    totalAmount: 0,
  };
  const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
      const updatedAmount =
        state.totalAmount +
        Number(action.item.price) * Number(action.item.amount);
      const existingCartItemsIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemsIndex];
      let updatedItem;
      let updatedItems;
      if (existingCartItem) {
        updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemsIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }
      return {
        items: updatedItems,
        totalAmount: updatedAmount,
      };
    } else if (action.type === 'REMOVE') {
      const updatedAmount =
        state.totalAmount -
        Number(action.item.price) * Number(action.item.amount);

      const existingCartItemsIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      let updatedItems;
      let existingCartItem = state.items[existingCartItemsIndex];
      if (existingCartItem.amount === 1) {
        updatedItems = [...state.items].filter((item) => {
          return item.id != existingCartItem.id;
        });
        // updatedItems = [...state.items].delete(existingCartItemsIndex);
        return {
          items: updatedItems,
          totalAmount: updatedAmount,
        };
      } else {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemsIndex] = updatedItem;
      }
      return {
        items: updatedItems,
        totalAmount: updatedAmount,
      };
    }
    return defaultCartState;
  };
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item });
  };
  const removeItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'REMOVE', item: item });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
