import React from 'react';

import DocsHeader from '@/components/DocumentationPage/Partials/DocsHeader';
import EndPointBadge from '@/components/DocumentationPage/Partials/Request/EndPointBadge';
import MethodBadge from '@/components/DocumentationPage/Partials/Request/MethodBadge';
import ResponseBlock from '@/components/DocumentationPage/Partials/Response/ResponseBlock';
import ResponseCodeSwitcher from '@/components/DocumentationPage/Partials/Response/ResponseCodeSwitcher';
const Documentation: React.FC = (): JSX.Element => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <div className='flex flex-col items-start justify-center gap-4'>
        <div className='flex items-center justify-center gap-4'>
          <MethodBadge method='POST' />
          <EndPointBadge endPoint='/api/v1/likeness' />
        </div>
        <DocsHeader />
        <div className='flex flex-col items-start justify-center gap-4'>
          <ResponseCodeSwitcher />
          <ResponseBlock />
        </div>
      </div>
    </div>
  );
};
export default Documentation;
