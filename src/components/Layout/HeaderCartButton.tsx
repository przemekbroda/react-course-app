import { useCart } from '../../store/CartProvider';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

export interface HeaderCartButtonProps {
  onClick?: () => void;
}

export default function HeaderCartButton(props: HeaderCartButtonProps) {
  const cartCtx = useCart();

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        {cartCtx.items.length}
      </span>
    </button>
  )
}