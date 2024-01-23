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

export async function deleteProject(id) {
  const { error } = await supabase.from('projects').delete().eq('id', id);
  if (error) throw new Error('Failed to delete project');
}

export async function updateProject({ id, projectInfo }) {
  const { error } = await supabase
    .from('projects')
    .update(projectInfo)
    .eq('id', id)
    .select();

  if (error) throw new Error('Failed to update');
}
