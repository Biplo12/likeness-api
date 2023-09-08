import { CopyIcon } from 'lucide-react';
import React from 'react';
const CopyButton: React.FC = (): JSX.Element => {
  return (
    <button className='bg-darker-bg hover:text-light-blue hover:border-light-blue border-dark-white text-dark-white flex items-center justify-center rounded-full border border-opacity-25 px-4 py-2.5 font-bold shadow-lg duration-150 ease-linear hover:border hover:border-opacity-100 disabled:cursor-not-allowed disabled:opacity-50'>
      <CopyIcon size={24} className='inline-block' />
    </button>
  );
};
export default CopyButton;
