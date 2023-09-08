import React from 'react';

import { useAppDispatch, useAppSelector } from '@/store/store-hooks';

import { setResponseCode } from '@/state/globalSlice';
const ResponseCodes: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const selectedCode = useAppSelector(
    (state) => state.global.selectedResponseCode
  );
  const codes = [200, 401, 403];

  const handleCodeClick = (code: number) => {
    dispatch(setResponseCode(code));
  };
  return (
    <>
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
    </>
  );
};
export default ResponseCodes;
