import { KeySquare, LockIcon } from 'lucide-react';
import React from 'react';

import useGenerateKey from '@/hooks/tanstack/useGenerateKey';

import Spinner from '@/components/common/Spinner';
const GenerateKey: React.FC = (): JSX.Element => {
  const { generateKey, isLoading } = useGenerateKey();
  return (
    <div className='flex flex-col items-start justify-center gap-4'>
      <h1 className='flex items-center justify-center gap-2 text-xl font-medium leading-[1.4] tracking-tighter text-gray-300'>
        <LockIcon size={24} className='text-light-blue inline-block' />
        Generate API Key:
      </h1>
      <p className='max-w-[450px] font-medium text-gray-400'>
        By clicking the button below, you will generate a new API key. It will
        be displayed on the next page. Please keep it safe and do not share it
        with anyone.
      </p>
      <button
        className='bg-darker-bg hover:border-light-blue border-dark-white text-dark-white flex min-w-[300px] items-center justify-center gap-2 rounded-full border border-opacity-25 px-6 py-2.5 font-bold shadow-lg duration-150 ease-linear hover:border hover:border-opacity-100 disabled:cursor-not-allowed disabled:opacity-50'
        onClick={generateKey}
      >
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <KeySquare className='h-6 w-6' />
            <span className='inline-block'>Generate Key</span>
          </>
        )}
      </button>
    </div>
  );
};
export default GenerateKey;
