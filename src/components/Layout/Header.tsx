import classes from "./Header.module.css";
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";
import { Fragment } from "react";

export interface HeaderProps {
  onShowCart?: () => void;
  onHideCart?: () => void;
}

export default function Header(props: HeaderProps) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of food"/>
      </div>
    </Fragment>
  );
}
