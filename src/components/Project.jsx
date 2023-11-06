import { getTagColor } from '../data/projects';

function Project({ project }) {
  const { imageUrl, title, description, tags } = project;

  return (
    <div>
      <img src={imageUrl} alt="" className="rounded-xl " />
      <p>{title}</p>
      <p>{description}</p>
      <div className="flex gap-2">
        {tags.map((tag) => (
          <p className={`${getTagColor(tag)} rounded-lg px-2 py-1`} key={tag}>
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Project;
