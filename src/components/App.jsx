import Userfront from "@userfront/toolkit";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import Home from "./HomeContent/Home";
import Login from "./Login/Login";
import './app.css'
import PasswordReset from "./PasswordReset/PasswordReset";
import Dashboard from "./Dashboard/Dashboard";

Userfront.init('demo1234')

export default function App() {
  return (
    <Router>
      <div>
        <nav className="nav">
          <ul className="ul">
            <li>
              <Link className="link" to="/">Home</Link>
            </li>
            <li>
              <Link className="link" to="/login">Login</Link>
            </li>
            <li>
              <Link className="link" to="/reset">Reset password</Link>
            </li>
            <li>
              <Link className="link" to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <h1 className="appName">Notes app</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<PasswordReset />} />
          <Route path="/dashboard" element={<RequireAuth> <Dashboard /> </RequireAuth> } />
        </Routes>
      </div>
    </Router>
  );
}

function RequireAuth({ children }) {
  let location = useLocation();
  if (!Userfront.tokens.accessToken) {
    return <Navigate className="link" to="/login" state={{ from: location }} replace />;
  } 

  return children;
}