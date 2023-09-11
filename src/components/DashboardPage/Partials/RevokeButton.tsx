import { RotateCcw } from 'lucide-react';
import React from 'react';

import useRevokeKey from '@/hooks/tanstack/useRevokeKey';

import Spinner from '@/components/common/Spinner';
const RevokeButton: React.FC = (): JSX.Element => {
  const { revokeKey, isLoading } = useRevokeKey();
  return (
    <button
      className='bg-darker-bg hover:border-light-blue hover:text-light-blue border-dark-white text-dark-white flex min-w-[150px] items-center justify-center gap-2 rounded-full border border-opacity-25 px-6 py-2.5 font-bold shadow-lg duration-150 ease-linear hover:border hover:border-opacity-100 disabled:cursor-not-allowed disabled:opacity-50'
      onClick={revokeKey}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <RotateCcw className='h-6 w-6' />
          Revoke
        </>
      )}
    </button>
  );
};
export default RevokeButton;
