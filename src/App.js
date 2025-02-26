//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import MyForm from './MyForm';
import SuccessPage from './SuccessPage';
import LoginPage from './LoginPage';
import Home1 from './Home1';
import home from './home';
function App() {
  return (
    <div>
        <home/>
    <Router className = 'App-header'>
        <Routes>
            <Route path="/" element={<MyForm />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/Home1" element={<Home1 />} />
        </Routes>
    </Router>
    </div>
);
}       

export default App;
