import React from 'react';

import ApiKeyBadge from '@/components/common/ApiKeyBadge';
import VersionBadge from '@/components/common/VersionBadge';
const DocsHeader: React.FC = (): JSX.Element => {
  return (
    <div className='flex flex-col items-start justify-center gap-4'>
      <div className='flex items-center justify-center gap-4'>
        <h1 className='text-light-blue text-center text-4xl font-bold leading-[1.4] tracking-tighter'>
          Compare strings
        </h1>
        <VersionBadge />
        <ApiKeyBadge />
      </div>
      <p className='text-dark-white text-center text-lg font-medium leading-[1.4] tracking-tighter'>
        Compares two strings and returns a similarity score between 0 and 1.
      </p>
    </div>
  );
};
export default DocsHeader;
