import { NavLink } from 'react-router-dom';

function DashSideBar() {
  return (
    <div className="w-1/5 bg-blue-100 p-4 text-black">
      <h1 className="mb-4 text-2xl font-semibold">Dashboard</h1>
      <ul>
        <li className="mb-2">
          <NavLink to="/dashboard">Home</NavLink>
        </li>
        <li className="mb-2">
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li className="mb-2">
          <NavLink to="/projectlist">Project List</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default DashSideBar;
