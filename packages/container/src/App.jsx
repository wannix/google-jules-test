import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';

const MFE1 = React.lazy(() => import('micro-frontend-1/App'));

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <nav className="flex items-center justify-between">
      <Link to="/" className="text-xl">Container</Link>
      <ul className="flex space-x-4">
        <li><Link to="/mfe1">Micro-frontend 1</Link></li>
      </ul>
    </nav>
  </header>
);

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main className="p-4">
          <Routes>
            <Route path="/mfe1" element={<Suspense fallback="Loading..."><MFE1 /></Suspense>} />
            <Route path="/" element={<h1 className="text-2xl">Welcome to the Container App</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
