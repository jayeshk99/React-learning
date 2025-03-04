import { useContext, useReducer } from 'react';

import CartIcon from '../Cart/CartIcon';
import { CartContext } from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';
export const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.length;

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
