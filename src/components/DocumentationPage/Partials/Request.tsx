import React from 'react';

import BodyItem from '@/components/common/BodyItem';
import EndPointBadge from '@/components/common/EndPointBadge';
import MethodBadge from '@/components/common/MethodBadge';
const Request: React.FC = (): JSX.Element => {
  return (
    <div className='flex w-full flex-col items-start justify-center gap-8'>
      <div className='flex w-full flex-col items-start justify-center'>
        <h1 className='text-center text-4xl font-bold leading-[1.4] tracking-tighter'>
          Request
        </h1>
        <div className='bg-light-blue h-[1px] w-full rounded-full' />
      </div>
      <div className='flex items-center justify-center gap-4'>
        <MethodBadge method='POST' />
        <EndPointBadge endPoint='/v1/likeness' />
      </div>
      <div className='border-light-blue ml-12 flex flex-col items-start justify-center gap-4 border-l'>
        <BodyItem
          attribute='text1'
          type='string'
          isRequired={true}
          description='First text to compare.'
          example='Hello World'
        />
        <BodyItem
          attribute='text2'
          type='string'
          isRequired={true}
          description='Second text to compare.'
          example='Hello World'
        />
      </div>
    </div>
  );
};
export default Request;
