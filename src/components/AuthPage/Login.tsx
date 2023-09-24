/* eslint-disable @next/next/no-img-element */
import React from 'react';

import LoginButtons from '@/components/AuthPage/Partials/LoginButtons';
import LogoBig from '@/components/common/LogoBig';

const Login: React.FC = (): JSX.Element => {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <div className='flex flex-col items-center justify-center'>
        <LogoBig />
        <h1 className='text-center text-2xl'>
          <span className='text-light-blue'>Sign In</span> to your account
        </h1>
      </div>
      <LoginButtons />
    </div>
  );
};

export default Login;
