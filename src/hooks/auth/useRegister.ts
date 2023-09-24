import { useSignUp } from '@clerk/nextjs';
import { useState } from 'react';

const useRegister = () => {
  const [loading, setLoading] = useState({
    google: false,
    github: false,
  });

  const { signUp } = useSignUp();
  const handleRegisterOAuth = async (provider: string) => {
    try {
      setLoading((prev) => ({ ...prev, [provider]: true }));
      await signUp?.authenticateWithRedirect({
        strategy: `oauth_${provider}` as 'oauth_google' | 'oauth_github',
        redirectUrl: `${window.location.origin}/dashboard`,
        redirectUrlComplete: `${window.location.origin}/dashboard`,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading((prev) => ({ ...prev, [provider]: false }));
    }
  };

  return { handleRegisterOAuth, loading };
};

export default useRegister;
