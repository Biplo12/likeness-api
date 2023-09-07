import React from 'react';

import Request from '@/components/DocumentationPage/Partials/Request';
import Response from '@/components/DocumentationPage/Partials/Response';
import ResponseHeader from '@/components/DocumentationPage/Partials/ResponseHeader';
const Documentation: React.FC = (): JSX.Element => {
  return (
    <div className='flex h-full w-full  flex-col items-center justify-center'>
      <div className='flex min-w-[1000px] flex-col items-start justify-center gap-12'>
        <ResponseHeader />
        <Request />
        <Response />
      </div>
    </div>
  );
};
export default Documentation;
