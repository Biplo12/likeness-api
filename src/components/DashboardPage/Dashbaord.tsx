import React from 'react';

import ApiKey from '@/components/DashboardPage/Partials/ApiKey';
import DashboardHeader from '@/components/DashboardPage/Partials/DashboardHeader';
import GenerateKey from '@/components/DashboardPage/Partials/GenerateKey';

const Dashbaord: React.FC = (): JSX.Element => {
  const isGenerated = true;
  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <div className='flex flex-col items-start justify-center gap-6'>
        <DashboardHeader />
        {isGenerated ? <ApiKey /> : <GenerateKey />}
      </div>
    </div>
  );
};
export default Dashbaord;
