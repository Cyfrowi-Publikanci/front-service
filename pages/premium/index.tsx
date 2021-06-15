import Head from 'next/head'
import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core';

import { Layout } from '../../components/common/layout';
import { BuyPremiumForm } from '../../components/premium/form';
import { ContentPaper } from '../../components/common/content-paper';
import { useAuthGuard } from '../../shared/auth-guard';

export default function BuyPremium() {
  const { t } = useTranslation();
  const classes = useStyles();
  const isLoggedIn = useAuthGuard();

  if (!isLoggedIn) return <></>;

  return (
    <Layout>
      <Head>
        <title>{t`Buy premium status`}</title>
      </Head>
      <div className={classes.wrapper}>
        <ContentPaper className={classes.contentPaper}>
          <BuyPremiumForm />
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