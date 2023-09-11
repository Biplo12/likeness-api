/* eslint-disable react-hooks/exhaustive-deps */
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import useGetKey from '@/hooks/tanstack/useGetKey';
import useSaveUser from '@/hooks/tanstack/useSaveUser';

import Dashboard from '@/components/DashboardPage/Dashbaord';
import DashboardLoading from '@/components/DashboardPage/Partials/DashboardLoading';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { useAppSelector } from '@/store/store-hooks';

export default function DashboardPage() {
  const { isUserSaved } = useAppSelector((state) => state.global);
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();
  const { saveUser } = useSaveUser();
  const { getKey } = useGetKey();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
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
        {isSignedIn && isLoaded && isUserSaved ? (
          <Dashboard />
        ) : (
          <DashboardLoading />
        )}
      </main>
    </Layout>
  );
}
