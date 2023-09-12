import { useSignIn } from '@clerk/nextjs';
import { useState } from 'react';

const useLogin = () => {
  const [loading, setLoading] = useState({
    google: false,
    github: false,
  });
  const { signIn } = useSignIn();
  const handleLoginOAuth = async (provider: string) => {
    try {
      setLoading((prev) => ({ ...prev, [provider]: true }));
      await signIn?.authenticateWithRedirect({
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

  return { handleLoginOAuth, loading };
};

export default useLogin;
