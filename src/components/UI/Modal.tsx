import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

export interface ModalProps {
  children?: ReactNode;
  onClose?: () => void;
}

export interface BackdropProps {
  children?: ReactNode;
  onClose?: () => void;
}

export interface OverlayProps {
  children?: ReactNode
}

function Backdrop(props: BackdropProps) {
  return (
    <div className={classes.backdrop} onClick={props.onClose}>
    </div>
  );
}

function Overlay(props: OverlayProps) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        {props.children}
      </div>
    </div>
  );
}

const portalElement = document.getElementById('overlays')!!;

export default function Modal(props: ModalProps) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
      {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, portalElement)}
    </>
  );
}