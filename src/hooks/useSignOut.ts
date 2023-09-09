import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { useState } from 'react';

const useSignOut = () => {
  const router = useRouter();
  const { signOut } = useAuth();
  const [loading, setLoading] = useState(false);
  const isDashboard = router.pathname === '/dashboard';
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

  return { handleSignOut, loading, isDashboard };
};

export default useSignOut;
