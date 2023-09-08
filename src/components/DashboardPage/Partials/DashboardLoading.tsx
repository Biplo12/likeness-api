import React from 'react';

import Spinner from '@/components/common/Spinner';
const DashboardLoading: React.FC = (): JSX.Element => {
  return (
    <div className='flex h-full w-full items-center justify-center gap-12 py-8'>
      <Spinner />
    </div>
  );
};
export default DashboardLoading;
