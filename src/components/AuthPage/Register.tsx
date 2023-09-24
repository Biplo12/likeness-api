/* eslint-disable @next/next/no-img-element */
import React from 'react';

import RegisterButtons from '@/components/AuthPage/Partials/RegisterButtons';
import LogoBig from '@/components/common/LogoBig';

const Register: React.FC = (): JSX.Element => {
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <div className='flex flex-col items-center justify-center'>
        <LogoBig />
        <h1 className='text-center text-2xl'>
          <span className='text-light-blue'>Sign Up</span> to create your
          account
        </h1>
      </div>
      <RegisterButtons />
    </div>
  );
};

export default Register;
