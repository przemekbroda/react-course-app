import { InputHTMLAttributes } from 'react';
import classes from './Input.module.css'

export interface InputProps {
  label: string;
  input: InputHTMLAttributes<HTMLInputElement>;
}

export default function Input(props: InputProps) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input}/>
    </div>
  );
}