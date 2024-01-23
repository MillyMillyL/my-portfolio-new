import supabase from './supabase';

export async function Login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    console.log(error);
    throw new Error('Login failed');
  }

  return data;
}
