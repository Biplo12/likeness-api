import Layout from '@/components/layout/Layout';
import Login from '@/components/LoginPage/Login';
import Seo from '@/components/Seo';

export default function SignInPage() {
  return (
    <Layout>
      <Seo />
      <main className='bg-dark-bg text-dark-white flex h-full min-h-[92.5vh] w-full items-center justify-center'>
        <Login />
      </main>
    </Layout>
  );
}
