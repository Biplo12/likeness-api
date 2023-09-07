import React from 'react';

interface IEndPointBadgeProps {
  endPoint: string;
}

const EndPointBadge: React.FC<IEndPointBadgeProps> = ({
  endPoint,
}): JSX.Element => {
  return (
    <span
      className='bg-dark-bg text-dark-white flex items-center justify-start gap-2 rounded-full border border-white border-opacity-25 px-4 py-1 text-center text-lg font-medium leading-[1.4] tracking-tighter'
      style={{
        boxShadow: '0px 1px 100px -12px #007FFF',
      }}
    >
      {endPoint}
    </span>
  );
};
export default EndPointBadge;
