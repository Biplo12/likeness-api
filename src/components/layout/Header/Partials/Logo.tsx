import { GitCompare } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
const Logo: React.FC = (): JSX.Element => {
  return (
    <Link
      className='text-light-blue flex items-center justify-center gap-2'
      href='/'
      passHref
    >
      <GitCompare size={32} />
      <span className='hover:text-light-blue text-center text-xl font-medium leading-[1.4] tracking-tighter text-gray-300 transition-all duration-150 ease-in-out'>
        Likeness API <span className='text-light-blue font-bold'>v1</span>
      </span>
    </Link>
  );
};
export default Logo;
