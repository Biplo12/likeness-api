import React from 'react';

interface IBodyItemProps {
  attribute: string;
  type: string;
  isRequired: boolean;
  description: string;
  example?: string;
}

const BodyItem: React.FC<IBodyItemProps> = ({
  attribute,
  type,
  isRequired,
  description,
  example,
}): JSX.Element => {
  return (
    <div className='flex flex-col items-start justify-center gap-4 px-4 py-2.5'>
      <div className='gap- flex items-center justify-center gap-2'>
        <span
          className='bg-dark-bg text-dark-white border-light-blue flex items-center justify-start gap-2 rounded-full border px-4 py-1 text-center text-lg font-medium leading-[1.4] tracking-tighter'
          style={{
            boxShadow: '0px 1px 100px -12px #007FFF',
          }}
        >
          {attribute}
        </span>
        <span
          className='bg-dark-bg text-dark-white flex items-center justify-start gap-2 rounded-full border border-white border-opacity-25 px-4 py-1 text-center text-lg font-medium leading-[1.4] tracking-tighter'
          style={{
            boxShadow: '0px 1px 100px -12px #007FFF',
          }}
        >
          {type}
        </span>
        <span
          className='bg-dark-bg text-dark-white flex items-center justify-start gap-2 rounded-full border border-white border-opacity-25 px-4 py-1 text-center text-lg font-medium leading-[1.4] tracking-tighter'
          style={{
            boxShadow: '0px 1px 100px -12px #007FFF',
          }}
        >
          {isRequired ? 'Required' : 'Optional'}
        </span>
      </div>
      <p className='text-dark-white text-lg font-medium leading-[1.4] tracking-tighter'>
        {description}
      </p>
      <p className='text-dark-white flex items-center justify-center gap-2 text-lg font-medium leading-[1.4] tracking-tighter'>
        <span>Example: </span>
        <code className='text-light-blue bg-light-blue rounded-md bg-opacity-25 p-1 text-sm'>
          {example}
        </code>
      </p>
    </div>
  );
};
export default BodyItem;
