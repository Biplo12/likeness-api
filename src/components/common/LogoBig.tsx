import { GitCompare } from 'lucide-react';
import React from 'react';
const LogoBig: React.FC = (): JSX.Element => {
  return (
    <div className='text-light-blue flex items-center justify-center gap-2 text-4xl'>
      <GitCompare size={64} />
      <span className='text-center text-7xl font-medium leading-[1.4] tracking-tighter text-gray-300'>
        Likeness API <span className='text-light-blue font-bold'>v1</span>
      </span>
    </div>
  );
};
export default LogoBig;
