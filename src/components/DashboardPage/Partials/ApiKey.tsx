import { LockIcon } from 'lucide-react';
import React from 'react';

import CopyButton from '@/components/DashboardPage/Partials/CopyButton';
import ViewKeyButton from '@/components/DashboardPage/Partials/ViewKeyButton';

import { useAppSelector } from '@/store/store-hooks';

const ApiKey: React.FC = (): JSX.Element => {
  const isKeyHidden = useAppSelector((state) => state.global.isKeyHidden);
  const randomString = () => {
    const chars =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 32; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  };
  const apiKey = randomString();
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex flex-col items-start justify-center gap-4'>
        <h1 className='flex items-center justify-center gap-2 text-xl font-medium leading-[1.4] tracking-tighter text-gray-300'>
          <LockIcon size={24} className='text-light-blue inline-block' /> Your
          API Key:
        </h1>
        <p className='max-w-[450px] font-medium text-gray-400'>
          Your API key is required to make requests to the Likeness API. Please
          keep it safe and do not share it with anyone.
        </p>
        <div
          className='bg-darker-bg border-light-blue text-dark-white flex h-[50px] w-full items-center justify-center gap-4 overflow-hidden rounded-md border p-2.5 font-bold shadow-lg'
          style={{
            boxShadow: '0px 1px 100px -20px #007FFF',
          }}
        >
          <input
            className='w-full border-none bg-transparent p-0 text-lg font-medium leading-[1.4] tracking-tighter text-gray-300 outline-none focus:ring-0'
            type='text'
            value={isKeyHidden ? '•'.repeat(32) : apiKey}
            readOnly
          />
          <ViewKeyButton />
          <CopyButton apiKey={apiKey} />
        </div>
      </div>
    </div>
  );
};
export default ApiKey;
