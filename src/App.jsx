/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

import DashboardLayout from './layout/DashboardLayout';
import AddProject from './pages/AddProject';
import Profile from './pages/Profile';
import ProjectList from './pages/ProjectList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route Component={DashboardLayout}>
          <Route path="/add-project" Component={AddProject} />
          <Route path="/profile" Component={Profile} />
          <Route path="/projectlist" Component={ProjectList} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
