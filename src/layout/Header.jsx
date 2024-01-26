import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="container mx-auto mb-16  flex items-center justify-between bg-gray-100 px-8 py-4 font-semibold">
      <div className="text-lg ">Milly Liu</div>
      <nav className="flex gap-4">
        <NavLink to="#about">About</NavLink>
        <NavLink to="#experience">Experience</NavLink>
        <NavLink to="#projects">Projects</NavLink>
        <NavLink to="#contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
