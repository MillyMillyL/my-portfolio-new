/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { addProject } from '../services/projectsApi';
import Button from '../components/Button';

function AddProject({ onCloseModal }) {
  const queryClient = useQueryClient();

  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  console.log(watch());

  const {
    mutate: addNewProject,
    isError,
    error,
  } = useMutation({
    mutationFn: addProject,
    onSuccess: () => queryClient.invalidateQueries(['projects']),
  });
  return (
    <div className="flex-1 p-4">
      <h1 className="font-semi-bold text-xl">Add Project</h1>
      <form
        onSubmit={handleSubmit((data) => {
          addNewProject(data);
          reset();
          onCloseModal();
        })}
        className="space-y-2"
      >
        <input
          type="text"
          placeholder="Image URL"
          {...register('imgUrl', { required: 'Image URL is required' })}
        />
        <p>{errors?.imgUrl?.message}</p>
        <input
          type="text"
          placeholder="Title"
          {...register('title', { required: 'Title is required' })}
        />
        <p>{errors?.title?.message}</p>
        <input
          type="text"
          placeholder="Description"
          {...register('description', { required: 'Description is required' })}
        />
        <p>{errors?.description?.message}</p>
        <input
          type="text"
          placeholder="Github repository"
          {...register('github', { required: 'Github repository is required' })}
        />
        <p>{errors?.github?.message}</p>
        <input
          type="text"
          placeholder="Netlify site URL"
          {...register('netlify', { required: 'Netlify site URL is required' })}
        />
        <p>{errors?.netlify?.message}</p>
        <input
          type="text"
          placeholder="Detail page URL"
          {...register('detailPage', {
            required: 'Detail Page URL is required',
          })}
        />
        <br />
        <p>{isError && error.message}</p>
        <Button>Submit</Button>
      </form>
    </div>
  );
}

export default AddProject;
