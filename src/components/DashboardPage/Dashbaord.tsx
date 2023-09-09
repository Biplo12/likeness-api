import React from 'react';

import ApiKey from '@/components/DashboardPage/Partials/ApiKey';
import DashboardHeader from '@/components/DashboardPage/Partials/DashboardHeader';

const Dashbaord: React.FC = (): JSX.Element => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-4 py-8'>
      <div className='flex flex-col items-start justify-center gap-4'>
        <DashboardHeader />
        <ApiKey />
      </div>
    </div>
  );
};
export default Dashbaord;
