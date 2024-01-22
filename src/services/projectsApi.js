import supabase from './supabase';

export async function getProjects() {
  const { data, error } = await supabase.from('projects').select('*');

  if (error) {
    console.log(error);
    throw new Error('Failed to get projects');
  }

  return data;
}

export async function getProjectTags(id) {
  const { data, error } = await supabase
    .from('projecttag')
    .select('id,tech_tools (tag,color)')
    .eq('project', id);

  if (error) {
    console.log(error);
    throw new Error('Failed to get project tags');
  }

  return data;
}

export async function addProject(newProject) {
  console.log(newProject);

  const { data, error } = await supabase
    .from('projects')
    .insert([newProject])
    .select();

  if (error) throw new Error('Fail to add new project');

  console.log(data);

  return data;
}

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
