import { getTagColor } from '../data/projects';
import IconLink from '../components/IconLink';
import { AiFillGithub } from 'react-icons/ai';
import { SiNetlify } from 'react-icons/si';
import { BiDetail } from 'react-icons/bi';

function Project({ project }) {
  const { imageUrl, title, description, tags } = project;

  return (
    <div className="flex flex-col gap-2">
      <img src={imageUrl} alt="" className="rounded-xl " />
      <div className="flex justify-between">
        <div className="flex gap-4">
          <IconLink
            href="https://github.com/"
            Icon={AiFillGithub}
            iconClass="h-6 w-6"
            title="Check Code on Github"
          />
          <IconLink
            href="https://github.com/"
            Icon={SiNetlify}
            iconClass="h-6 w-6"
            title="Check on Netlify"
          />
        </div>
        <IconLink
          href="https://github.com/"
          Icon={BiDetail}
          iconClass="h-6 w-6"
          title="Check details of project"
        />
      </div>
      <p className="text-lg font-semibold">{title}</p>
      <p>{description}</p>
      <div className="flex gap-2">
        {tags.map((tag) => (
          <p
            className={`${getTagColor(tag)} rounded-lg px-2 py-1 font-medium`}
            key={tag}
          >
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Project;
