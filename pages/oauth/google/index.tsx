import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import getConfig from 'next/config';
import axios from 'axios';

import routes from '../../../config/routes';
import { authenticateSuccess } from '../../../redux/actions/auth';
import i18n from '../../../config/i18n';
import { showAlert } from '../../../redux/actions/components';
import { AlertType } from '../../../components/common/alerts/types';
import { GlobalLoader } from '../../../components/common/loaders';
import { LoginByGooglePayload } from '../../../proto-generated/authentication_pb';
import { authServiceClient } from '../../../api/rpc';
import { selectState } from '../../../redux/selectors';

interface Props {
  token?: string;
  state?: string;
  error?: string;
}

export default function GoogleAuth({ token, state, error }: Props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const currentState = useSelector(selectState);

  useEffect(() => {
    if (currentState !== state || !token || !state) router.replace(routes.login);
    if (token && currentState === state) {
      dispatch(authenticateSuccess({ token }));
      dispatch(showAlert(i18n.t('Login successfully'), AlertType.SUCCESS));
      router.replace(routes.dashboard);
    } else {
      dispatch(showAlert(i18n.t(error ?? 'Login failed'), AlertType.ERROR));
      router.replace(routes.login);
    }
  }, [router, currentState]);

  return <GlobalLoader load />;
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<Props>> => {
  const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();
  const {
    query: { code, state },
  } = context;

  const googleProps = {
    code,
    client_id: publicRuntimeConfig.googleClientID,
    client_secret: serverRuntimeConfig.googleSecretClientID,
    redirect_uri: publicRuntimeConfig.googleCallbackURL,
    grant_type: 'authorization_code',
  };

  try {
    const googleResponse = await axios({
      method: 'post',
      url: 'https://oauth2.googleapis.com/token',
      data: googleProps,
      headers: { 'content-type': 'application/json' },
    });
    const { data } = googleResponse;

    const oauthPayload = new LoginByGooglePayload();
    oauthPayload.setToken(data.id_token);
    const authResponse = await authServiceClient.loginByGoogle(oauthPayload, {});
    const authToken = authResponse.getToken();

    return {
      props: {
        token: authToken,
        state: Array.isArray(state) ? state[0] : state,
      },
    };
  } catch (error) {
    return {
      props: {
        error: error?.message,
      },
    };
  }
};
