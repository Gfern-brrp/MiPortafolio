import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './components/ProjectDetail';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
    </Routes>
  );
};

export default Router;