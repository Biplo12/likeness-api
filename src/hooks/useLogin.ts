import { useSignIn } from '@clerk/nextjs';

const useLogin = () => {
  const { signIn } = useSignIn();
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

  return { handleLoginOAuth };
};

export default useLogin;
