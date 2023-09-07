import React from 'react';
const DocumentationHeader: React.FC = (): JSX.Element => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-8'>
      <h1 className='text-center text-6xl font-black'>Making a request</h1>
      <p className='max-w-2xl text-center text-lg'>/api/v1/likeness</p>
    </div>
  );
};
export default DocumentationHeader;
