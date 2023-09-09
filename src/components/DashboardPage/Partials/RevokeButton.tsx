import { RotateCcw } from 'lucide-react';
import React from 'react';
const RevokeButton: React.FC = (): JSX.Element => {
  return (
    <button className='bg-darker-bg hover:border-light-blue border-dark-white text-dark-white flex min-w-[150px] items-center justify-center gap-2 rounded-full border border-opacity-25 px-6 py-2.5 font-bold shadow-lg duration-150 ease-linear hover:border hover:border-opacity-100 disabled:cursor-not-allowed disabled:opacity-50'>
      <RotateCcw className='h-6 w-6' />
      Revoke
    </button>
  );
};
export default RevokeButton;
