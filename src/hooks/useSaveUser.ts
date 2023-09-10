import { useUser } from '@clerk/nextjs';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const useSaveUser = () => {
  const { user } = useUser();
  const { mutateAsync, isLoading } = useMutation({
    mutationKey: ['saveUser'],
    mutationFn: async () => {
      await axios.post('/api/auth/saveUser', { user });
    },
  });
  const handleSaveUser = async () => {
    try {
      await mutateAsync();
    } catch (error) {
      console.error(error);
    }
  };
  return { saveUser: handleSaveUser, saveUserLoading: isLoading };
};
export default useSaveUser;
