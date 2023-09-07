import React from 'react';

import CodeSwitcher from '@/components/DocumentationPage/Partials/CodeSwitcher';
import DocumentationHeader from '@/components/DocumentationPage/Partials/DocumentationHeader';
const Documentation: React.FC = (): JSX.Element => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <div className='flex flex-col gap-8'>
        <DocumentationHeader />
        <div className='flex items-center justify-start'>
          <CodeSwitcher />
        </div>
      </div>
    </div>
  );
};
export default Documentation;
