import { useUser } from '@clerk/nextjs';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import LogoutButton from '@/components/AuthButtons/LogoutButton';
import SignInButton from '@/components/AuthButtons/SignInButton';
import SpinnerButton from '@/components/common/SpinnerButton';
import DashboardButton from '@/components/layout/Header/Partials/DashboardButton';
const Navbar: React.FC = (): JSX.Element => {
  const router = useRouter();
  const activeLink = router.pathname;
  const { isSignedIn, isLoaded } = useUser();
  const isOnDashboard = router.pathname === '/dashboard';
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
              className={`hover:text-light-blue border-b border-transparent text-center text-lg font-medium leading-[1.4] tracking-tighter text-gray-300 duration-150 ${
                activeLink === link.href ? 'text-light-blue' : ''
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
        {!isLoaded ? (
          <SpinnerButton />
        ) : isOnDashboard ? (
          <LogoutButton />
        ) : isSignedIn ? (
          <DashboardButton />
        ) : (
          <SignInButton />
        )}
      </ul>
      <Menu size={24} className='mxsm:block hidden text-gray-300' />
    </nav>
  );
};
export default Navbar;
