import { Menu } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import SignInButton from '@/components/layout/Header/Partials/SignInButton';
const Navbar: React.FC = (): JSX.Element => {
  const navLinks = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Documentation',
      href: '/documentation',
    },
  ];
  return (
    <nav className='flex items-center justify-center gap-4'>
      <ul className='mxsm:hidden flex items-center justify-center gap-4'>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className='hover:border-light-blue border-b border-transparent text-center text-lg font-medium leading-[1.4] tracking-tighter text-gray-300 duration-150 ease-linear'
            >
              {link.name}
            </Link>
          </li>
        ))}
        <SignInButton />
      </ul>
      <Menu size={24} className='mxsm:block hidden text-gray-300' />
    </nav>
  );
};
export default Navbar;
