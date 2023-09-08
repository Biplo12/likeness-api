import { SignIn } from '@clerk/nextjs';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function SignInPage() {
  return (
    <Layout>
      <Seo />
      <main className='bg-dark-bg text-dark-white flex h-full min-h-[92.5vh] w-full items-center justify-center'>
        <SignIn redirectUrl='/dashboard' afterSignInUrl='/dashboard' />
      </main>
    </Layout>
  );
}
