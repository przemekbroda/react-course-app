import { ReactNode } from "react";
import classes from './Card.module.css';

export interface CardProps {
  children?: ReactNode
}

export default function Card(props: CardProps) {
  return (
    <div className={classes.card}>
      {props.children}
    </div>
  );
}