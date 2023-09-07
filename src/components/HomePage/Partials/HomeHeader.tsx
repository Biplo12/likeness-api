import React from 'react';

import VersionBadge from '@/components/common/VersionBadge';
const HomeHeader: React.FC = (): JSX.Element => {
  return (
    <div className='flex h-full w-full flex-col items-start justify-center gap-2'>
      <VersionBadge />
      <div className='flex flex-col items-start justify-start gap-2'>
        <h1 className='text-5xl font-medium leading-[1.4] tracking-tighter text-gray-300'>
          The Ultimate String Comparison
          <br /> <span className='text-light-blue font-bold'>API</span> for
          Developers 🚀
        </h1>
        <p className='max-w-[550px] font-medium text-gray-400'>
          The Likeness API is a REST API that allows you to compare two strings
          and get a score of how similar they are.
        </p>
      </div>
    </div>
  );
};
export default HomeHeader;
