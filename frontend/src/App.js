import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ResidentList from './components/ResidentList';
import AddResident from './components/AddResident';
import EditResident from './components/EditResident';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/residents" element={<ResidentList />} />
            <Route path="/add" element={<AddResident />} />
            <Route path="/edit/:id" element={<EditResident />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;