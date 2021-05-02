import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

import { useStyles } from './styles';
import { selectGlobalLoader } from '../../../redux/selectors';
import { Modal } from '../modal';

interface Props {
  load?: boolean;
}

export function GlobalLoader({ load }: Props) {
  const classes = useStyles();
  const isLoading = useSelector(selectGlobalLoader);

  if (!load && !isLoading) return <></>;

  return (
    <Modal visible={load || isLoading}>
      <div className={classes.wrapper}>
        <CircularProgress />
      </div>
    </Modal>
  );
}
