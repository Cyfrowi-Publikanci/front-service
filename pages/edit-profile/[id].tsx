import Head from 'next/head'
import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core';
import { useRouter } from 'next/router';

import { Layout } from '../../components/common/layout';
import { EditProfileForm } from '../../components/edit-profile/form';
import { ContentPaper } from '../../components/common/content-paper';
import { useAuthGuard } from '../../shared/auth-guard';

export default function EditProfile() {
  const { t } = useTranslation();
  const classes = useStyles();
  const router = useRouter()
  const isLoggedIn = useAuthGuard();
  const { id: idQuery = [] } = router.query;
  const id = (Array.isArray(idQuery) ? idQuery[0] : idQuery) || '-';

  if (!isLoggedIn) return <></>;

  return (
    <Layout>
      <Head>
        <title>{t`Change your password`}</title>
      </Head>
      <div className={classes.wrapper}>
        <ContentPaper className={classes.contentPaper}>
          <EditProfileForm id={id} />
        </ContentPaper> 
      </div>
    </Layout>
  );
}


const useStyles = makeStyles(() => ({
  contentPaper: {
    maxWidth: '600px',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  }
}));
