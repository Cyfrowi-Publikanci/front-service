import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert/Alert';

import { selectAlert } from '../../../redux/selectors';
import { hideAlert } from '../../../redux/actions/components';

export function AlertPubLab() {
  const dispatch = useDispatch();
  const alert = useSelector(selectAlert);

  const onClose = useCallback(() => {
    dispatch(hideAlert());
  }, []);

  if (!alert.message) return <></>;

  return (
    <Snackbar
      open={alert.message.length > 0}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      autoHideDuration={4000}
      onClose={onClose}
    >
      <Alert variant="filled" onClose={onClose} severity={alert.type}>
        {alert.message}
      </Alert>
    </Snackbar>
  );
}
