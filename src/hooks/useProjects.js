import { useQuery } from '@tanstack/react-query';
import { getProjects } from '../services/projectsApi';

function useProjects() {
  const {
    data: projectss,
    isLoading,
    isError,
    error: projectsError,
  } = useQuery({ queryKey: ['projects'], queryFn: getProjects });

  return { projectss, isLoading, isError, projectsError };
}

export default useProjects;
