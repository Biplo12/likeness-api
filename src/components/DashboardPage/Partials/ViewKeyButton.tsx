import { Eye, EyeOff } from 'lucide-react';
import React from 'react';

import { useAppDispatch, useAppSelector } from '@/store/store-hooks';

import { toggleKeyVisibility } from '@/state/globalSlice';
const ViewKeyButton: React.FC = (): JSX.Element => {
  const isKeyVisible = useAppSelector((state) => state.global.isKeyHidden);
  const dispatch = useAppDispatch();
  const handleKeyVisibility = () => {
    dispatch(toggleKeyVisibility());
  };
  return (
    <button>
      {!isKeyVisible ? (
        <EyeOff
          size={24}
          className='inline-block'
          onClick={() => handleKeyVisibility()}
        />
      ) : (
        <Eye
          size={24}
          className='inline-block'
          onClick={() => handleKeyVisibility()}
        />
      )}
    </button>
  );
};
export default ViewKeyButton;
