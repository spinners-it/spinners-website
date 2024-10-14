import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Home from './components/organisms/Home';
import ProjectDetails from './components/organisms/ProjectDetails';

function App() {
  return (
    <>
     <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
