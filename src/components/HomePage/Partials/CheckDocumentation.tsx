import { FileText } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
const CheckDocumentation: React.FC = (): JSX.Element => {
  return (
    <Link
      className='bg-darker-bg hover:text-light-blue hover:border-light-blue border-dark-white text-dark-white flex min-w-[100px] items-center justify-center rounded-full border border-opacity-25 px-6 py-2.5 font-bold shadow-lg duration-150 ease-linear hover:border hover:border-opacity-100'
      style={{
        boxShadow: '0px 1px 100px -18px #007FFF',
      }}
      href='/documentation'
    >
      <FileText className='mr-2 inline-block' size={24} />
      Documentation
    </Link>
  );
};
export default CheckDocumentation;
