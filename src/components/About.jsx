import Button from '../ui/Button';
import profile from '../assets/profile.png';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import IconLink from '../ui/IconLink';

function About() {
  return (
    <div className="container mx-auto mb-16 items-center  justify-center space-x-10 space-y-10 md:flex">
      <div className="md:w-1/3">
        <img src={profile} alt="profile" className="h-70 w-70 rounded-full" />
      </div>
      <div className="flex flex-col gap-6 md:w-2/3">
        <p>Hello, I&apos;m</p>
        <h2 className="text-3xl font-bold">Milly Liu</h2>
        <p className="text-lg font-semibold">
          Self-taught frontend developer proficient in HTML, CSS, and
          JavaScript. Specialized in React, Tailwind CSS, MUI, and TypeScript.
          Passionate about creating responsive and dynamic user interfaces with
          a keen eye for design and functionality.
        </p>
        <div className="flex gap-4">
          <Button buttonClass="border hover:border-gray-900 transition-all duration-500">
            Download CV
          </Button>
          <Button buttonClass="hover: border hover:border-gray-900 transition-all duration-500">
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
