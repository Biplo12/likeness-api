import { useUser } from '@clerk/nextjs';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { useAppDispatch, useAppSelector } from '@/store/store-hooks';

import { setApiKey } from '@/state/globalSlice';

const useGetKey = () => {
  const { user } = useUser();
  const apiKey = useAppSelector((state) => state.global.apiKey);
  const dispatch = useAppDispatch();
  const { refetch: getKey, isLoading } = useQuery({
    queryKey: ['getKey'],
    queryFn: async () => {
      const res = await axios.get('/api/key/getKey', {
        params: { userId: user?.id },
      });
      return res.data;
    },
    enabled: false,
  });

  const handleGetKey = async () => {
    try {
      if (apiKey) return;
      const res = await getKey();
      dispatch(setApiKey(res.data.data.key));
    } catch (error) {
      console.error(error);
    }
  };
  return { getKey: handleGetKey, getKeyLoading: isLoading };
};

export default useGetKey;
