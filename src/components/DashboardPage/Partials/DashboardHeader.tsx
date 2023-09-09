import { useUser } from '@clerk/nextjs';
import React from 'react';
const DashboardHeader: React.FC = (): JSX.Element => {
  const { user } = useUser();
  return (
    <h1 className='text-5xl font-medium leading-[1.4] tracking-tighter text-gray-300'>
      Welcome back, <span className='text-light-blue'>{user?.fullName}</span>
    </h1>
  );
};
export default DashboardHeader;
