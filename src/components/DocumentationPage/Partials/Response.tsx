import React from 'react';

import { useAppDispatch, useAppSelector } from '@/store/store-hooks';

import { setResponseCode } from '@/state/globalSlice';
const Response: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const selectedCode = useAppSelector(
    (state) => state.global.selectedResponseCode
  );
  const codes = [200, 401, 403];

  const handleCodeClick = (code: number) => {
    dispatch(setResponseCode(code));
  };
  return (
    <div className='flex w-full flex-col items-start justify-center'>
      <div className='flex items-center justify-center gap-4'>
        <h1 className='text-center text-4xl font-bold leading-[1.4] tracking-tighter'>
          Response
        </h1>
        {codes.map((code) => (
          <button
            className={`tracking-tighter' text-center text-2xl font-bold leading-[1.4] ${
              code === selectedCode ? 'text-light-blue' : 'text-dark-white'
            }`}
            key={code}
            onClick={() => handleCodeClick(code)}
          >
            {code}
          </button>
        ))}
      </div>
      <div className='bg-light-blue h-[1px] w-full rounded-full' />
    </div>
  );
};
export default Response;
