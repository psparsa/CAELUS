import React from 'react';
import { cc } from '../../utils/combineClassNames';
import * as styles from './AddSpeedDial.module.css';

interface AddSpeedDialProps {
  onClick?: () => void;
  className?: string;
}

export const AddSpeedDial = ({ onClick, className }: AddSpeedDialProps) => {
  return (
    <div onClick={onClick} className={cc([className, styles.AddSpeedDial])}>
      <img src="/add.svg" />
    </div>
  );
};
