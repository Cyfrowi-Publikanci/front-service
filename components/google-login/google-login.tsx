import getConfig from 'next/config';
import { Button } from '@material-ui/core';
import Image from 'next/image'
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { signInGoogle } from '../../redux/actions/auth';
import { useStyles } from './styles';

export function GoogleLogin() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();
  const classes = useStyles();
  const { publicRuntimeConfig } = getConfig();

  const handleSignIn = () => {
    const state = uuidv4();
    dispatch(signInGoogle({ state }));
    router.push(`https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=${publicRuntimeConfig.googleCallbackURL}&scope=profile email&client_id=${publicRuntimeConfig.googleClientID}&state=${state}`);
  };

  return (
    <>
      <Button variant="contained" type="submit" size="large" onClick={handleSignIn} className={classes.button} >
        <Image src={'/google_logo.svg'} alt="google" width={30}  height={20} />
        <div>{t`Login`}</div>
      </Button>
    </>
  );
}
