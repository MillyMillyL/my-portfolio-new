import { v4 as uuidv4 } from 'uuid';

const imgUrl = 'https://placehold.co/600x400';

export const projects = [
  {
    id: uuidv4(),
    imageUrl: imgUrl,
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ullam voluptates error cum incidunt, minus assumenda ab eius quia nisi!',
    tags: ['JavaScript', 'React', 'Tailwindcss'],
  },
  {
    id: uuidv4(),
    imageUrl: imgUrl,
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ullam voluptates error cum incidunt, minus assumenda ab eius quia nisi!',
    tags: ['JavaScript', 'React', 'Tailwindcss'],
  },
  {
    id: uuidv4(),
    imageUrl: imgUrl,
    title: 'Project 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ullam voluptates error cum incidunt, minus assumenda ab eius quia nisi!',
    tags: ['JavaScript', 'React', 'Tailwindcss'],
  },
  {
    id: uuidv4(),
    imageUrl: imgUrl,
    title: 'Project 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ullam voluptates error cum incidunt, minus assumenda ab eius quia nisi!',
    tags: ['JavaScript', 'React', 'Tailwindcss'],
  },
  {
    id: uuidv4(),
    imageUrl: imgUrl,
    title: 'Project 4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ullam voluptates error cum incidunt, minus assumenda ab eius quia nisi!',
    tags: ['JavaScript', 'React', 'Tailwindcss'],
  },
  {
    id: uuidv4(),
    imageUrl: imgUrl,
    title: 'Project 5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ullam voluptates error cum incidunt, minus assumenda ab eius quia nisi!',
    tags: ['JavaScript', 'React', 'Tailwindcss'],
  },
];

const tags = [
  ...new Set(
    projects
      .map((project) => project.tags)
      .reduce((acc, cur) => acc.concat(cur), []),
  ),
];
console.log(tags);

const colors = [
  'bg-slate-300',
  'bg-gray-300',
  'bg-red-300',
  'bg-orange-300',
  'bg-amber-300',
  'bg-yellow-300',
  'bg-lime-300',
  'bg-green-300',
  'bg-emerald-300',
  'bg-teal-300',
  'bg-cyan-300',
  'bg-sky-300',
  'bg-blue-300',
  'bg-indigo-300',
  'bg-violet-300',
  'bg-purple-300',
  'bg-fuchsia-300',
  'bg-pink-300',
  'bg-rose-300',
];

const tagColors = {};
for (let i = 0; i < tags.length; i++) {
  tagColors[tags[i]] = colors[i];
}
console.log(tagColors);

export function getTagColor(tag) {
  return tagColors[tag];
}
