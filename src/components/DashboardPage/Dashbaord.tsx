import React from 'react';

import ApiKey from '@/components/DashboardPage/Partials/ApiKey';
import DashboardHeader from '@/components/DashboardPage/Partials/DashboardHeader';
import RevokeButton from '@/components/DashboardPage/Partials/RevokeButton';

const Dashbaord: React.FC = (): JSX.Element => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <div className='flex flex-col items-start justify-center gap-6'>
        <DashboardHeader />
        <ApiKey />
        <RevokeButton />
      </div>
    </div>
  );
};
export default Dashbaord;
