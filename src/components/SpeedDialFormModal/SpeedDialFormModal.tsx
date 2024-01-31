import React from 'react';
import * as styles from './SpeedDialFormModal.module.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { speedDialFormSchema } from './_validationSchema';

type SpeedDial = {
  name: string;
  link: string;
};

export type SpeedDialFormModalProperties = {
  open: boolean;
  onClose: () => void;
  onSave: (speedDial: SpeedDial) => void;
};

export const SpeedDialFormModal = ({
  open,
  onClose,
  onSave,
}: SpeedDialFormModalProperties) => {
  const modalReference = React.useRef<HTMLFormElement>(null);
  const { register, handleSubmit, formState, reset } = useForm<SpeedDial>({
    resolver: zodResolver(speedDialFormSchema),
  });

  const onSubmit: SubmitHandler<SpeedDial> = (data) => {
    reset();
    onSave(data);
  };

  React.useEffect(() => {
    const handleMouseDownEvent = (event: MouseEvent) => {
      if (modalReference.current)
        if (!modalReference.current.contains(event.target as Node)) {
          onClose();
        }
    };

    document.addEventListener('mousedown', handleMouseDownEvent);
    return () => {
      document.removeEventListener('mousedown', handleMouseDownEvent);
    };
  }, []);

  if (!open) return <></>;
  return (
    <div className={styles.Underlay}>
      <form
        className={styles.Modal}
        ref={modalReference}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles.InputWrapper}>
          <span className={styles.ErrorPlaceholder}>
            {formState.errors.name?.message}
          </span>
          <input
            type="text"
            className={styles.Input}
            placeholder="Enter a label"
            maxLength={12}
            {...register('name')}
          />
        </div>

        <div className={styles.InputWrapper}>
          <span className={styles.ErrorPlaceholder}>
            {formState.errors.link?.message}
          </span>
          <input
            type="text"
            inputMode="url"
            className={styles.Input}
            placeholder="Enter the link"
            {...register('link')}
          />
        </div>
        <button className={styles.Submit}>Submit</button>
      </form>
    </div>
  );
};
