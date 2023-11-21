import Project from '../layout/Project';
import { projects } from '../data/projects';

function Projects() {
  return (
    <div className="container mx-auto">
      <h2 className="mb-14 mt-10 text-center text-3xl font-bold">Projects</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
