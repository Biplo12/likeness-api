import { Menu } from 'lucide-react';
import React from 'react';

import NavbarLinks from '@/components/layout/Header/Partials/NavbarLinks';
const Navbar: React.FC = (): JSX.Element => {
  return (
    <nav className='flex items-center justify-center gap-4'>
      <NavbarLinks />
      <Menu size={24} className='mxsm:block hidden text-gray-300' />
    </nav>
  );
};
export default Navbar;
