import Head from 'next/head'
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Layout } from '../../components/common/layout';
import { useRouter } from 'next/router';
import { Profile } from '../../components/profile';
import { useAuthGuard } from '../../shared/auth-guard';


export default function UsersProfile() {
  const { t } = useTranslation();
  const isLoggedIn = useAuthGuard();
  const router = useRouter()
  const { id: idQuery = [] } = router.query;
  const id = (Array.isArray(idQuery) ? idQuery[0] : idQuery) || '-';

  if (!isLoggedIn) return <></>;

  return (
    <Layout>
      <Head>
        <title>{t`Edit your profile`}</title>
      </Head>
      <Profile id={id} />
    </Layout>
  );
}


