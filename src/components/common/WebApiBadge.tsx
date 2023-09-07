import { ChromeIcon } from 'lucide-react';
import React from 'react';
const WebApiBadge: React.FC = (): JSX.Element => {
  return (
    <span
      className='bg-dark-bg text-dark-white flex items-center justify-start gap-2 rounded-full border border-white border-opacity-25 px-4 py-1 text-center text-lg font-medium leading-[1.4] tracking-tighter'
      style={{
        boxShadow: '0px 1px 100px -12px #007FFF',
      }}
    >
      <ChromeIcon size={18} className='text-light-blue' />
      Web <span className='text-light-blue font-bold'>API</span>
    </span>
  );
};
export default WebApiBadge;
