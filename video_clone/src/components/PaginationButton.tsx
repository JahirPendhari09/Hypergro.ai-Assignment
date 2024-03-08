import React from 'react';
import  style from './component.module.css';

interface Props {
  onClick: () => void;
  disabled: boolean;
  label: string;
}

const PaginationButton: React.FC<Props> = ({ onClick, disabled, label }) => {
  return  <button onClick={onClick} disabled={disabled} className={style.btn} style={{cursor:disabled? "not-allowed": "pointer"}}>{label}</button>
};

export default PaginationButton;
