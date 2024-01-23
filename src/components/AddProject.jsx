/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import {
  addProject,
  updateProject as updateProjectApi,
} from '../services/projectsApi';
import Button from '../ui/Button';

function AddProject({ onCloseModal, projectToEdit }) {
  const queryClient = useQueryClient();

  const initialValues = {
    imgUrl: projectToEdit?.imgUrl,
    title: projectToEdit?.title,
    description: projectToEdit?.description,
    github: projectToEdit?.github,
    netlify: projectToEdit?.netlify,
    detailPage: projectToEdit?.detailPage,
  };

  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ initialValues });
  console.log(watch());

  const {
    mutate: addNewProject,
    isError: isAddProjectError,
    error: addProjectError,
  } = useMutation({
    mutationFn: addProject,
    onSuccess: () => queryClient.invalidateQueries(['projects']),
  });

  const {
    data: updatedData,
    mutate: updateProject,
    isError: isUpdateProjectError,
    error: updateProjectError,
  } = useMutation({
    mutationFn: updateProjectApi,
    onSuccess: () => queryClient.invalidateQueries(['projects']),
  });
  console.log(updatedData, isUpdateProjectError);
  return (
    <div className="flex-1 p-4">
      <h1 className="font-semi-bold text-xl">Add Project</h1>
      <form
        onSubmit={handleSubmit((data) => {
          if (projectToEdit) {
            console.log(data, 'update');
            console.log({ id: projectToEdit.id, projectInfo: data });
            updateProject({
              id: projectToEdit.id,
              projectInfo: data,
            });
          } else {
            console.log(data, 'add');
            addNewProject(data);
          }
          reset();
          onCloseModal();
        })}
        className="space-y-2"
      >
        <input
          type="text"
          placeholder="Image URL"
          {...register('imgUrl', { required: 'Image URL is required' })}
          defaultValue={initialValues.imgUrl}
        />
        <p>{errors?.imgUrl?.message}</p>
        <input
          type="text"
          placeholder="Title"
          {...register('title', { required: 'Title is required' })}
          defaultValue={initialValues.title}
        />
        <p>{errors?.title?.message}</p>
        <input
          type="text"
          placeholder="Description"
          {...register('description', { required: 'Description is required' })}
          defaultValue={initialValues.description}
        />
        <p>{errors?.description?.message}</p>
        <input
          type="text"
          placeholder="Github repository"
          {...register('github', { required: 'Github repository is required' })}
          defaultValue={initialValues.github}
        />
        <p>{errors?.github?.message}</p>
        <input
          type="text"
          placeholder="Netlify site URL"
          {...register('netlify', { required: 'Netlify site URL is required' })}
          defaultValue={initialValues.netlify}
        />
        <p>{errors?.netlify?.message}</p>
        <input
          type="text"
          placeholder="Detail page URL"
          {...register('detailPage')}
          defaultValue={initialValues.detailPage}
        />
        <br />
        <p>{isAddProjectError && addProjectError.message}</p>
        <p>{isUpdateProjectError && updateProjectError.message}</p>
        <Button>Submit</Button>
      </form>
    </div>
  );
}

export default AddProject;
