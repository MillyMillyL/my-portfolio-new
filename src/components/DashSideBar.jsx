import { NavLink } from 'react-router-dom';

function DashSideBar(setActiveLink) {
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="w-1/5 bg-blue-500 p-4 text-white">
      <h1 className="mb-4 text-2xl font-semibold">Dashboard</h1>
      <ul>
        <li className="mb-2">
          <NavLink to="/add-project" onClick={() => handleLinkClick('Home')}>
            Add Project
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink to="/profile" onClick={() => handleLinkClick('Home')}>
            Profile
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink to="/projectlist" onClick={() => handleLinkClick('Home')}>
            Project List
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default DashSideBar;
