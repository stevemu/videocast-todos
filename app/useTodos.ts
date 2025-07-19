import { useQuery } from '@tanstack/react-query';
import { getTodosAction } from './getTodosAction';

export const useTodos = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      return await getTodosAction();
    },
  });
};
