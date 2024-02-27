import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './index.css'
import Exercises from './pages/Exercises';

const App = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />
      <div className="mt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Exercises/:id" element={<Exercises />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
