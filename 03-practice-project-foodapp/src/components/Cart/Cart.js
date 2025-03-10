import classes from './Cart.module.css';
import { Modal } from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

export const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({
      id: item.id,
      name: item.name,
      amount: 1,
      price: item.price,
    });
  };
  const cartItemRemoveHandler = (item) => {
    cartCtx.removeItem({
      id: item.id,
      amount: 1,
      price: item.price,
    });
  };
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.key}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems ? <button className={classes.button}>Order</button> : <></>}
      </div>
    </Modal>
  );
};
