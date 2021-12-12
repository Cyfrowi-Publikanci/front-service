import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import routes from '../config/routes';
import { selectAuthorizationToken } from '../redux/selectors';
import { getAllNotyfications } from '../redux/actions/auth';

export const useAuthGuard = () => {
  const router = useRouter();
  const token = useSelector(selectAuthorizationToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      router.push(routes.login);
    } else {
      dispatch(getAllNotyfications());
    }
  }, [router, token]);

  return Boolean(token !== '');
};
