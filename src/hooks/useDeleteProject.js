import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteProject as deleteProjectApi } from '../services/projectsApi';

export function useDeleteProject() {
  const queryClient = useQueryClient();

  const {
    mutate: deleteProject,
    error: deleteProjectError,
    isError: isDeleteProjectError,
  } = useMutation({
    mutationFn: deleteProjectApi,
    onSuccess: () => queryClient.invalidateQueries(['projects']),
  });

  return {
    deleteProject,
    deleteProjectError,
    isDeleteProjectError,
  };
}
