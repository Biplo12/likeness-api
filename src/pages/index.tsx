import * as React from 'react';

import Home from '@/components/HomePage/Home';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main className='bg-dark-bg text-dark-white flex h-full min-h-screen w-full items-center justify-center pt-[20px]'>
        <Home />
      </main>
    </Layout>
  );
}
