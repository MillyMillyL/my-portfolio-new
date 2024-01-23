// import { getTagColor } from '../data/projects';
import IconLink from '../ui/IconLink';
import { AiFillGithub } from 'react-icons/ai';
import { SiNetlify } from 'react-icons/si';
import { BiDetail } from 'react-icons/bi';
import { useQuery } from '@tanstack/react-query';
import { getProjectTags } from '../services/projectsApi';
import Modal from '../components/Modal';

function Project({ project }) {
  const { imgUrl, title, description, github, netlify, detailPage } = project;

  const {
    data: projectTags,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ['projectTags', project.id],
    queryFn: async () => await getProjectTags(project.id),
  });

  console.log(projectTags, isLoading, isError);

  if (isLoading) return <p>Loading</p>;
  if (isError) <p>{error.message}</p>;

  return (
    <div className="flex flex-col gap-2">
      <Modal>
        <Modal.Open opens={project.id}>
          <div className=" h-[200px] w-[300px] cursor-pointer overflow-hidden">
            <img
              src={imgUrl}
              alt=""
              className="block h-auto w-full rounded-xl"
            />
          </div>
        </Modal.Open>
        <Modal.Window name={project.id}>
          <img src={imgUrl} alt={title} />
        </Modal.Window>
      </Modal>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <IconLink
            href={github}
            Icon={AiFillGithub}
            iconClass="h-6 w-6"
            title="Check Code on Github"
          />
          <IconLink
            href={netlify}
            Icon={SiNetlify}
            iconClass="h-6 w-6"
            title="Check on Netlify"
          />
        </div>
        {detailPage && (
          <IconLink
            href={detailPage}
            Icon={BiDetail}
            iconClass="h-6 w-6"
            title="Check details of project"
          />
        )}
      </div>
      <p className="text-lg font-semibold">{title}</p>
      <div className="flex gap-2">
        {projectTags.map((tag) => (
          <p
            className={`${tag.tech_tools.color} rounded-lg px-2 py-1 font-medium`}
            key={tag.id}
          >
            {tag.tech_tools.tag}
          </p>
        ))}
      </div>
      <p>{description}</p>
    </div>
  );
}

export default Project;
