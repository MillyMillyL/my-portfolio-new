import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Login as apiLogin } from '../services/projectsApi';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Login() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    mutate: login,
    isError: isLoginError,
    error: loginError,
  } = useMutation({
    mutationFn: apiLogin,
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data);
      navigate('/add-project');
    },
  });

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(async (data) => await login(data))}
      className="mx-auto flex  max-w-sm flex-col items-center justify-center space-y-2 bg-slate-300 py-10"
    >
      <input
        type="email"
        placeholder="email"
        {...register('email', { required: 'Email is required' })}
      />
      <p>{errors?.email?.message}</p>
      <input
        type="password"
        placeholder="password"
        {...register('password', { required: 'Password is required' })}
      />
      <p>{errors?.password?.message}</p>
      <p>{isLoginError && loginError.message}</p>
      <input type="submit" />
    </form>
  );
}

export default Login;
