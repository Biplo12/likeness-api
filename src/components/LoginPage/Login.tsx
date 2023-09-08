/* eslint-disable @next/next/no-img-element */
import React from 'react';

import LogoBig from '@/components/common/LogoBig';
import LoginButtons from '@/components/LoginPage/Partials/LoginButtons';

const Login: React.FC = (): JSX.Element => {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <LogoBig />
      <LoginButtons />
    </div>
  );
};

export default Login;
