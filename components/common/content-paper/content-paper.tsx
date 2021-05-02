import { ReactNode } from 'react';
import Paper from '@material-ui/core/Paper';

import { useStyles } from './styles';

interface Props {
  children: ReactNode;
  className?: string;
}

export const ContentPaper = ({ children, className }: Props) => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={`${classes.paperContainer} ${className || ''}`}>
      {children}
    </Paper>
  );
};
