import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

export interface MealItemProps {
  name?: string;
  description?: string;
  price?: number;
  id: string;
}

export default function MealItem(props: MealItemProps) {
  const price = `$${props.price?.toFixed(2)}`

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id=''/>
      </div>
    </li>
  );
}