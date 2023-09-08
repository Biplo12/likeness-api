import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';
const ViewKeyButton: React.FC = (): JSX.Element => {
  const [isKeyVisible, setIsKeyVisible] = useState<boolean>(false);
  return (
    <button className='bg-darker-bg hover:text-light-blue hover:border-light-blue border-dark-white text-dark-white flex items-center justify-center rounded-full border border-opacity-25 px-4 py-2.5 font-bold shadow-lg duration-150 ease-linear hover:border hover:border-opacity-100 disabled:cursor-not-allowed disabled:opacity-50'>
      {isKeyVisible ? (
        <EyeOff
          size={24}
          className='inline-block'
          onClick={() => setIsKeyVisible(!isKeyVisible)}
        />
      ) : (
        <Eye
          size={24}
          className='inline-block'
          onClick={() => setIsKeyVisible(!isKeyVisible)}
        />
      )}
    </button>
  );
};
export default ViewKeyButton;
