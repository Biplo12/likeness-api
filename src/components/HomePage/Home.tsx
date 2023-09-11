import React from 'react';

import CheckDocumentation from '@/components/HomePage/Partials/CheckDocumentation';
import CodeBlocks from '@/components/HomePage/Partials/CodeBlocks';
import HomeHeader from '@/components/HomePage/Partials/HomeHeader';
import TryItButton from '@/components/HomePage/Partials/TryItButton';
const Home: React.FC = (): JSX.Element => {
  return (
    <div className='mxlg:flex-col flex h-full w-full items-center justify-center gap-12 py-8'>
      <div className='mxlg:w-full mxlg:items-center mxlg:text-center flex flex-col items-start justify-start gap-4'>
        <HomeHeader />
        <div className='mxlg:flex-wrap mxlg:justify-center flex items-start justify-start gap-4'>
          <TryItButton />
          <CheckDocumentation />
        </div>
      </div>
      <CodeBlocks />
    </div>
  );
};
export default Home;
