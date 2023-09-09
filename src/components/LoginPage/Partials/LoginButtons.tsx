/* eslint-disable @next/next/no-img-element */
import React from 'react';

import useLogin from '@/hooks/useLogin';
const LoginButtons: React.FC = (): JSX.Element => {
  const { handleLoginOAuth } = useLogin();
  const loginProviders = [
    { name: 'Google', icon: '/svg/google.svg', provider: 'google' },
    { name: 'Github', icon: '/svg/github.svg', provider: 'github' },
  ];

  return (
    <>
      {loginProviders.map((provider) => (
        <button
          key={provider.provider}
          onClick={() => handleLoginOAuth(provider.provider)}
          className='bg-darker-bg hover:border-light-blue border-dark-white text-dark-white flex min-w-[300px] items-center justify-center gap-2 rounded-full border border-opacity-25 px-6 py-2.5 font-bold shadow-lg duration-150 ease-linear hover:border hover:border-opacity-100 disabled:cursor-not-allowed disabled:opacity-50'
        >
          <img
            src={provider.icon}
            alt={`${provider.name} Icon`}
            className='h-6 w-6'
          />
          <span className='inline-block'>{provider.name}</span>
        </button>
      ))}
    </>
  );
};
export default LoginButtons;
