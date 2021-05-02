import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  modal: {
    position: 'fixed',
    minWidth: '100vw',
    minHeight: '100vh',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(2, 6, 44, 0.4)',
    overflow: 'hidden',
    zIndex: 1000,
  },
}));
