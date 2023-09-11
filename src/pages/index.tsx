import * as React from 'react';

import Home from '@/components/HomePage/Home';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main className='bg-dark-bg text-dark-white mxlg:min-h-[115vh] flex h-auto min-h-[92.5vh] w-full items-center justify-center px-8'>
        <Home />
      </main>
    </Layout>
  );
}
