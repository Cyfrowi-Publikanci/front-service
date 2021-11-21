import Head from 'next/head'
import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core';

import { Layout } from '../../components/common/layout';
import { EditForm } from '../../components/changePassword/form';
import { ContentPaper } from '../../components/common/content-paper';

export default function EditProfile() {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Layout>
      <Head>
        <title>{t`Change your password`}</title>
      </Head>
      <div className={classes.wrapper}>
        <ContentPaper className={classes.contentPaper}>
          <EditForm />
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
