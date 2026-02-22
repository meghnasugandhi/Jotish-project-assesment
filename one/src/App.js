import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginPage from './pages/LoginPage';
import ListPage from './pages/ListPage';
import DetailsPage from './pages/DetailsPage';
import PhotoResultPage from './pages/PhotoResultPage';
import GraphPage from './pages/GraphPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [employees, setEmployees] = useState([]); // Shared data
  const [selectedUser, setSelectedUser] = useState(null);
  const [capturedImg, setCapturedImg] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage setAuth={setIsAuthenticated} />} />
        
        <Route path="/list" element={
          isAuthenticated ? <ListPage setEmployees={setEmployees} setSelectedUser={setSelectedUser} /> : <Navigate to="/" />
        } />
        
        <Route path="/graph" element={
          isAuthenticated ? <GraphPage data={employees} /> : <Navigate to="/" />
        } />

        <Route path="/details" element={
          isAuthenticated ? <DetailsPage user={selectedUser} setCapturedImg={setCapturedImg} /> : <Navigate to="/" />
        } />
        
        <Route path="/photo-result" element={
          isAuthenticated ? <PhotoResultPage img={capturedImg} /> : <Navigate to="/" />
        } />
      </Routes>
    </Router>
  );
}

export default App;