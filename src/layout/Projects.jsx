import Project from '../layout/Project';

import useProjects from '../hooks/useProjects';

function Projects() {
  const { projectss, isLoading, isError, projectsError } = useProjects();

  if (isLoading) {
    return 'Loading';
  }
  if (isError) {
    return projectsError.message;
  }
  console.log(projectss);
  return (
    <div className="container mx-auto">
      <h2 className="mb-14 mt-10 text-center text-3xl font-bold">Projects</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
        {projectss.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
