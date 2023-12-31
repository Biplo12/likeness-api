import { ScanFace } from 'lucide-react';
import { useRouter } from 'next/router';
import React from 'react';
const SignUpButton: React.FC = (): JSX.Element => {
  const router = useRouter();
  const isSignUpPage = router.pathname === '/sign-up/[[...index]]';
  const handleSignUp = () => {
    if (!isSignUpPage) {
      router.push('/sign-up');
    }
  };

  return (
    <button
      className='bg-darker-bg hover:text-light-blue hover:border-light-blue border-dark-white text-dark-white flex min-w-[100px] items-center justify-center rounded-full border border-opacity-25 px-6 py-2.5 font-bold shadow-lg duration-150 ease-linear hover:border hover:border-opacity-100 disabled:cursor-not-allowed disabled:opacity-50'
      style={{
        boxShadow: '0px 1px 100px -18px #007FFF',
      }}
      onClick={handleSignUp}
      disabled={isSignUpPage}
    >
      <ScanFace className='mr-2 inline-block' size={24} />
      Sign Up
    </button>
  );
};
export default SignUpButton;
