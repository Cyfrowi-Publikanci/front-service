import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import routes from '../config/routes';
import { selectAuthorizationToken } from '../redux/selectors';

export const useAuthGuard = () => {
  const router = useRouter();
  const token = useSelector(selectAuthorizationToken);

  useEffect(() => {
    if (!token) {
      router.push(routes.login);
    }
  }, [router, token]);

  return Boolean(token !== '');
};
