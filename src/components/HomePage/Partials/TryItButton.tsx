import { Compass } from 'lucide-react';
import React from 'react';
const TryItButton: React.FC = (): JSX.Element => {
  return (
    <button
      className='bg-darker-bg hover:border-light-blue border-dark-white text-dark-white flex min-w-[100px] items-center justify-center rounded-full border border-opacity-25 px-6 py-2.5 font-bold shadow-lg duration-150 ease-linear hover:border hover:border-opacity-100'
      style={{
        boxShadow: '0px 1px 100px -18px #007FFF',
      }}
    >
      <Compass className='mr-2 inline-block' size={24} />
      Try it out
    </button>
  );
};
export default TryItButton;