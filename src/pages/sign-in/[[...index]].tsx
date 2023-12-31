import SignUpButton from '@/components/AuthButtons/SignUpButton';
import Login from '@/components/AuthPage/Login';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function SignInPage() {
  return (
    <Layout>
      <Seo />
      <main className='bg-dark-bg text-dark-white flex h-full min-h-[92.5vh] w-full flex-col items-center justify-center gap-4'>
        <Login />
        <p className='text-light-blue text-center font-semibold'>Or</p>
        <SignUpButton />
      </main>
    </Layout>
  );
}
