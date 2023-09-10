import { useUser } from '@clerk/nextjs';
import React from 'react';

import { useAppSelector } from '@/store/store-hooks';
const DashboardHeader: React.FC = (): JSX.Element => {
  const { user } = useUser();
  const isKeyGenerated = useAppSelector((state) => state.global.apiKey);
  return (
    <h1 className='text-5xl font-medium leading-[1.4] tracking-tighter text-gray-300'>
      {isKeyGenerated ? (
        <>
          Welcome back,{' '}
          <span className='text-light-blue'>{user?.fullName}</span>
        </>
      ) : (
        <>
          Welcome to <span className='text-light-blue'>Likeness</span>
        </>
      )}
    </h1>
  );
};
export default DashboardHeader;
