import React from 'react';
import logo from './logo.svg';
// import UserForm from './HomePage/UserForm';
import './App.css';
import Register from './Auth/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Auth/Login';
import { ToastContainer } from 'react-toastify';   

function App() {
  return (
    <div className="App">
      <ToastContainer />  
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} /> 
          {/* //<Route path="/" element={<UserForm />} />  */}
          <Route path= "/login" element={<Login />} /> 

        </Routes>
      </Router>
    </div>
  );
}

export default App;
