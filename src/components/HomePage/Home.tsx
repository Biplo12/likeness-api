import React from 'react';

import CodeBlocks from '@/components/common/CodeBlocks';
import CheckDocumentation from '@/components/HomePage/Partials/CheckDocumentation';
import HomeHeader from '@/components/HomePage/Partials/HomeHeader';
import TryItButton from '@/components/HomePage/Partials/TryItButton';
const Home: React.FC = (): JSX.Element => {
  return (
    <div className='flex h-full w-full items-center justify-center gap-12 py-8'>
      <div className='flex flex-col items-start justify-start gap-4'>
        <HomeHeader />
        <div className='flex items-start justify-start gap-4'>
          <TryItButton />
          <CheckDocumentation />
        </div>
      </div>
      <CodeBlocks />
    </div>
  );
};
export default Home;
