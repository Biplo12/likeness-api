import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useEffect } from 'react';

import Dashboard from '@/components/DashboardPage/Dashbaord';
import DashboardLoading from '@/components/DashboardPage/Partials/DashboardLoading';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
export default function DashboardPage() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) {
      return;
    }
    if (!isSignedIn) {
      router.push('/');
    }
  }, [isLoaded, isSignedIn, router]);

  return (
    <Layout>
      <Seo />
      <main className='bg-dark-bg text-dark-white flex h-full min-h-[92.5vh] w-full items-center justify-center'>
        {isSignedIn && isLoaded ? <Dashboard /> : <DashboardLoading />}
      </main>
    </Layout>
  );
}
