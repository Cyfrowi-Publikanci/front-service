import Head from 'next/head'
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Layout } from '../components/common/layout';

export default function Dashboard() {
  const { t } = useTranslation();

  return (
    <Layout>
      <Head>
        <title>{t`Dashboard`}</title>
      </Head>
      <h1>{t`Dashboard`}</h1>
    </Layout>
  );
}
