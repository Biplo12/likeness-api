import React from 'react';

import { useAppDispatch, useAppSelector } from '@/store/store-hooks';

import { setResponseCode } from '@/state/globalSlice';
const ResponseCodeSwitcher: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const selectedCode = useAppSelector(
    (state) => state.global.selectedResponseCode
  );
  const codes = [200, 400, 401, 403];

  const handleCodeClick = (code: number) => {
    dispatch(setResponseCode(code));
  };
  return (
    <div className='flex items-center justify-center gap-4'>
      {codes.map((code) => (
        <button
          className={`text-dark-white flex items-center justify-start gap-2 rounded-full border border-opacity-25 px-4 py-1 text-center text-lg font-medium leading-[1.4] tracking-tighter ${
            code === selectedCode
              ? 'text-light-blue border-light-blue'
              : 'text-dark-white border-dark-white'
          }`}
          key={code}
          onClick={() => handleCodeClick(code)}
        >
          {code}
        </button>
      ))}
    </div>
  );
};
export default ResponseCodeSwitcher;
