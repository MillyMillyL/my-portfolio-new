import supabase from './supabase';

export async function getProjects() {
  const { data, error } = await supabase.from('projects').select('*');

  if (error) {
    console.log(error);
    throw new Error('Failed to get projects');
  }

  return data;
}
