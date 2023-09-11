import React from 'react';
const FooterDate: React.FC = (): JSX.Element => {
  return (
    <p className='text-dark-white text-center text-sm font-medium leading-[1.4] tracking-tighter opacity-25'>
      @ {new Date().getFullYear()} Robert Siński
    </p>
  );
};
export default FooterDate;
