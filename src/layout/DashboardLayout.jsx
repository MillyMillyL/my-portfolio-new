import { Outlet } from 'react-router-dom';
import DashSideBar from '../components/DashSideBar';

function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <DashSideBar />
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
