import { LogOut } from 'lucide-react';
import React from 'react';

import useSignOut from '@/hooks/auth/useSignOut';

import Spinner from '@/components/common/Spinner';
const LogoutButton: React.FC = (): JSX.Element => {
  const { loading, handleSignOut, isDashboard } = useSignOut();

  return (
    <button
      className='bg-darker-bg hover:text-light-blue hover:border-light-blue border-dark-white text-dark-white flex h-[45px] w-[135px] items-center justify-center rounded-full border border-opacity-25 px-6 py-2.5 font-bold shadow-lg duration-150 ease-linear hover:border hover:border-opacity-100'
      style={{
        boxShadow: '0px 1px 100px -18px #007FFF',
      }}
      onClick={handleSignOut}
    >
      {loading && isDashboard ? (
        <Spinner />
      ) : (
        <>
          <LogOut className='mr-2 inline-block' size={24} />
          Logout
        </>
      )}
    </button>
  );
};
export default LogoutButton;
