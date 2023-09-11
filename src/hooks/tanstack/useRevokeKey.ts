import { useUser } from '@clerk/nextjs';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { useAppDispatch } from '@/store/store-hooks';

import { setInitialUserState } from '@/state/globalSlice';

const useRevokeKey = () => {
  const { user } = useUser();
  const dispatch = useAppDispatch();
  const { mutateAsync, isLoading } = useMutation({
    mutationKey: ['revokeKey'],
    mutationFn: async () => {
      const res = await axios.post('/api/key/revoke', { user });
      return res.data;
    },
  });

  const handleRevokeKey = async () => {
    try {
      await mutateAsync();
      dispatch(setInitialUserState());
    } catch (error) {
      console.error(error);
    }
  };
  return { revokeKey: handleRevokeKey, isLoading };
};

export default useRevokeKey;
