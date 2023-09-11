import React from 'react';

import FooterDate from '@/components/layout/Footer/Partials/FooterDate';
import FooterLinks from '@/components/layout/Footer/Partials/FooterLinks';
const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className='bg-dark-bg flex h-[4.5rem] flex-col items-center justify-center gap-1'>
      <FooterLinks />
      <FooterDate />
    </footer>
  );
};
export default Footer;
