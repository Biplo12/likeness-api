import { useUser } from '@clerk/nextjs';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { useAppDispatch, useAppSelector } from '@/store/store-hooks';

import { setIsUserSaved } from '@/state/globalSlice';

const useSaveUser = () => {
  const isUserSaved = useAppSelector((state) => state.global.isUserSaved);
  const dispatch = useAppDispatch();
  const { user } = useUser();
  const { mutateAsync } = useMutation({
    mutationKey: ['saveUser'],
    mutationFn: async () => {
      await axios.post('/api/auth/saveUser', { user });
    },
  });
  const handleSaveUser = async () => {
    try {
      if (isUserSaved) return;
      await mutateAsync();
      dispatch(setIsUserSaved(true));
    } catch (error) {
      console.error(error);
    }
  };
  return { saveUser: handleSaveUser };
};
export default useSaveUser;
