import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import routes from '../../config/routes';
import { AUTHENTICATION_ERROR_CLEAR } from '../../redux/actions-types/auth';
import { selectAuthenticateError } from '../../redux/selectors';

export function Auth() {
  const dispatch = useDispatch();
  const router = useRouter();
  const unauthorized = useSelector(selectAuthenticateError);

  useEffect(() => {
    if (unauthorized) {
      router.replace(routes.login);
      dispatch({ type: AUTHENTICATION_ERROR_CLEAR });
    }
  }, [unauthorized]);

  return <></>;
}
