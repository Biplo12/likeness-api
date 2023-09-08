import React from 'react';

import CopyButton from '@/components/DashboardPage/Partials/CopyButton';
import ViewKeyButton from '@/components/DashboardPage/Partials/ViewKeyButton';
const ApiKey: React.FC = (): JSX.Element => {
  const randomString = () => {
    const chars =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 32; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  };
  return (
    <div className='flex flex-col items-center justify-center gap-4 py-8'>
      <h1 className='text-xl font-medium leading-[1.4] tracking-tighter text-gray-300'>
        Your API Key:
      </h1>
      <input
        className='bg-darker-bg border-dark-white text-dark-white flex h-[45px] w-[300px] items-center justify-center overflow-hidden rounded-full border border-opacity-25 px-6 py-2.5 font-bold shadow-lg duration-150 ease-linear hover:border hover:border-opacity-100'
        style={{
          boxShadow: '0px 1px 100px -18px #007FFF',
        }}
        value={randomString()}
        readOnly
      />
      <div className='flex items-center justify-center gap-2'>
        <CopyButton />
        <ViewKeyButton />
      </div>
    </div>
  );
};
export default ApiKey;
