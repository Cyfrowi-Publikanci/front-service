import { ReactNode } from 'react';

import { useStyles } from './styles';

interface Props {
  children: ReactNode;
  visible: boolean;
  onClose?: () => void;
}

export function Modal({ children, visible, onClose }: Props) {
  const classes = useStyles();

  if (!visible) return <></>;

  const onCloseHandler = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target === event.currentTarget && onClose) onClose();
  };

  return (
    <div className={classes.modal} onClick={onCloseHandler}>
      {children}
    </div>
  );
}