import * as React from 'react';

import Documentation from '@/components/DocumentationPage/Documentation';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function DocumentationPage() {
  return (
    <Layout>
      <Seo />
      <main className='bg-dark-bg text-dark-white flex h-full min-h-screen w-full items-center justify-center'>
        <Documentation />
      </main>
    </Layout>
  );
}
