import React from 'react';
const SpinnerButton: React.FC = (): JSX.Element => {
  return (
    <span
      className='bg-darker-bg border-dark-white text-dark-white flex min-h-[45px] min-w-[150px] items-center justify-center rounded-full border border-opacity-25 px-6 py-2.5 font-bold shadow-lg duration-150 ease-linear'
      style={{
        boxShadow: '0px 1px 100px -18px #007FFF',
      }}
    >
      <span className='loader' />
    </span>
  );
};
export default SpinnerButton;
