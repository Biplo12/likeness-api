import React from 'react';

interface IMethodBadgeProps {
  method: string;
}

const MethodBadge: React.FC<IMethodBadgeProps> = ({ method }): JSX.Element => {
  return (
    <span className='bg-light-blue text-dark-white flex items-center justify-start gap-2 rounded-full border border-white border-opacity-25 bg-opacity-50 px-4 py-1 text-center text-lg font-medium leading-[1.4] tracking-tighter'>
      {method}
    </span>
  );
};
export default MethodBadge;
