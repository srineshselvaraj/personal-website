import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={
              <div className="flex items-center justify-center h-[calc(100vh-128px)]">
                <h1 className="text-3xl font-bold text-gray-700">Experience Page</h1>
              </div>
            } />
            <Route path="/projects" element={
              <div className="flex items-center justify-center h-[calc(100vh-128px)]">
                <h1 className="text-3xl font-bold text-gray-700">Projects Page</h1>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
