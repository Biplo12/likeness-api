/* eslint-disable @next/next/no-img-element */
import { useSignIn } from '@clerk/nextjs';
import React from 'react';
const LoginButtons: React.FC = (): JSX.Element => {
  const { signIn } = useSignIn();
  const loginProviders = [
    { name: 'Google', icon: '/svg/google.svg', provider: 'google' },
    { name: 'Github', icon: '/svg/github.svg', provider: 'github' },
  ];

  const handleLoginOAuth = async (provider: string) => {
    try {
      await signIn?.authenticateWithRedirect({
        strategy: `oauth_${provider}` as 'oauth_google' | 'oauth_github',
        redirectUrl: `${window.location.origin}/dashboard`,
        redirectUrlComplete: `${window.location.origin}/dashboard`,
      });
    } catch (error) {
      console.log(error);
    }
  };
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
