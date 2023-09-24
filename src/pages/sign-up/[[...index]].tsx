import SignInButton from '@/components/AuthButtons/SignInButton';
import Register from '@/components/AuthPage/Register';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function SignUpPage() {
  return (
    <Layout>
      <Seo />
      <main className='bg-dark-bg text-dark-white flex h-full min-h-[92.5vh] w-full flex-col items-center justify-center gap-4'>
        <Register />
        <p className='text-light-blue text-center font-semibold'>Or</p>
        <SignInButton />
      </main>
    </Layout>
  );
}
