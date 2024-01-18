import Button from '../components/Button';
import profile from '../assets/profile.png';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import IconLink from '../components/IconLink';

function About() {
  return (
    <div className="container mx-auto items-center justify-center  space-x-10 space-y-10 p-8 md:flex">
      <div className="flex justify-center">
        <img src={profile} alt="profile" className="h-80 w-80 rounded-full" />
      </div>
      <div className="flex flex-col items-center gap-6">
        <p>Hello, I&apos;m</p>
        <h2 className="text-3xl font-bold">Milly Liu</h2>
        <p className="text-lg font-semibold">Frontend Developer</p>
        <div className="flex gap-4">
          <Button buttonClass="border hover:border-gray-900 duration-500">
            Download CV
          </Button>
          <Button buttonClass="bg-gray-800 text-white hover:font-bold duration-500">
            Contact Info
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <IconLink
            href="https://github.com/"
            Icon={AiFillGithub}
            iconClass="h-6 w-6"
          />
          <IconLink
            href="https://www.linkedin.com/"
            Icon={AiFillLinkedin}
            iconClass="h-6 w-6"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
