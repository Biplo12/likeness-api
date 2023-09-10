/* eslint-disable react-hooks/exhaustive-deps */
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import useGetKey from '@/hooks/useGetKey';
import useSaveUser from '@/hooks/useSaveUser';

import Dashboard from '@/components/DashboardPage/Dashbaord';
import DashboardLoading from '@/components/DashboardPage/Partials/DashboardLoading';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function DashboardPage() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();
  const { saveUser, saveUserLoading } = useSaveUser();
  const { getKey, getKeyLoading } = useGetKey();

  useEffect(() => {
    if (!isLoaded || !isSignedIn) {
      router.push('/');
    }
  }, [isLoaded, isSignedIn, router]);

  useEffect(() => {
    if (isSignedIn) {
      getKey();
    }
  }, [isSignedIn]);

  useEffect(() => {
    if (isSignedIn) {
      saveUser();
    }
  }, [isSignedIn]);

  return (
    <Layout>
      <Seo />
      <main className='bg-dark-bg text-dark-white flex h-full min-h-[92.5vh] w-full items-center justify-center'>
        {(isSignedIn && isLoaded) || saveUserLoading || getKeyLoading ? (
          <Dashboard />
        ) : (
          <DashboardLoading />
        )}
      </main>
    </Layout>
  );
}
