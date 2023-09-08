import { useAuth } from '@clerk/nextjs';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import Spinner from '@/components/common/Spinner';
const LogoutButton: React.FC = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const { signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      setLoading(true);
      await signOut();
      router.push('/');
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <button
      className='bg-darker-bg hover:text-light-blue hover:border-light-blue border-dark-white text-dark-white flex min-w-[130px] items-center justify-center gap-2 rounded-full border border-opacity-25 px-6 py-2.5 font-bold shadow-lg duration-150 ease-linear hover:border hover:border-opacity-100'
      style={{
        boxShadow: '0px 1px 100px -18px #007FFF',
      }}
      onClick={handleSignOut}
    >
      <LogOut className='inline-block' size={24} />
      {loading ? <Spinner /> : <>Logout</>}
    </button>
  );
};
export default LogoutButton;
