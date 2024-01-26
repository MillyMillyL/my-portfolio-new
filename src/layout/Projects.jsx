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

  return (
    <div className="container mx-auto mb-16 bg-gray-100 p-8">
      <h2 className="mb-14 text-center text-3xl font-bold">Projects</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
        {projectss.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
