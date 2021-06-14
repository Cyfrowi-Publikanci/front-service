import Head from 'next/head'
import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core';

import { Layout } from '../../components/common/layout';
import { ProfileForm } from '../../components/profile/form';
import { useRouter } from 'next/router';


export default function UsersProfile() {
  const { t } = useTranslation();
  const router = useRouter()
  const { id: idQuery = [] } = router.query;
  const id = (Array.isArray(idQuery) ? idQuery[0] : idQuery) || '-';
  return (
    <Layout>
      <Head>
        <title>{t`Edit your profile`}</title>
      </Head>
          <ProfileForm profile_id ={ id }  />
    </Layout>
  );
}


