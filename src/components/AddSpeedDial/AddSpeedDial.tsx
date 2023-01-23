import React from 'react';
import { cc } from '../../utils/combineClassNames';
import * as styles from './AddSpeedDial.module.css';

interface AddSpeedDialProps {
  className?: string;
}

export const AddSpeedDial = ({ className }: AddSpeedDialProps) => {
  return (
    <div className={cc([className, styles.AddSpeedDial])}>
      <img src="/add.svg" />
    </div>
  );
};
