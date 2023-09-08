import { useUser } from '@clerk/nextjs';
import React from 'react';

import ApiKey from '@/components/DashboardPage/Partials/ApiKey';

const Dashbaord: React.FC = (): JSX.Element => {
  const { user } = useUser();
  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-4 py-8'>
      <h1 className='text-5xl font-medium leading-[1.4] tracking-tighter text-gray-300'>
        Welcome back, <span className='text-primary'>{user?.fullName}</span>
      </h1>
      <ApiKey />
    </div>
  );
};
export default Dashbaord;
