import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className="flex items-center justify-center h-[calc(100vh-64px)]">
              <h1 className="text-3xl font-bold text-blue-600">Hello, Tailwind!</h1>
            </div>
          } />
          <Route path="/experience" element={
            <div className="flex items-center justify-center h-[calc(100vh-64px)]">
              <h1 className="text-3xl font-bold text-gray-700">Experience Page</h1>
            </div>
          } />
          <Route path="/projects" element={
            <div className="flex items-center justify-center h-[calc(100vh-64px)]">
              <h1 className="text-3xl font-bold text-gray-700">Projects Page</h1>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
