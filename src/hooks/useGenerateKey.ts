import { useUser } from '@clerk/nextjs';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { useAppDispatch } from '@/store/store-hooks';

import { setApiKey } from '@/state/globalSlice';

const useGenerateKey = () => {
  const { user } = useUser();
  const dispatch = useAppDispatch();
  const { mutateAsync, isLoading } = useMutation({
    mutationKey: ['generateKey'],
    mutationFn: async () => {
      const res = await axios.post('/api/key/create', { user });
      return res.data;
    },
  });

  const handleGenerateKey = async () => {
    try {
      const res = await mutateAsync();
      console.log(res);
      dispatch(setApiKey(res.data.key));
    } catch (error) {
      console.error(error);
    }
  };
  return { generateKey: handleGenerateKey, isLoading };
};

export default useGenerateKey;
