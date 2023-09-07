import React from 'react';

import Logo from '@/components/layout/Header/Partials/Logo';
import Navbar from '@/components/layout/Header/Partials/Navbar';
const Header: React.FC = (): JSX.Element => {
  return (
    <header className='text-dark-white absolute left-0 top-0 flex h-16 w-full items-center justify-between p-4 py-10'>
      <Logo />
      <Navbar />
    </header>
  );
};
export default Header;
