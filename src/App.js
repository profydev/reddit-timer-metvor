import React from 'react';
import { Link } from "react-router-dom";
import './App.css';

export default function App() {
  return (
    <div>
      <h1>App Placeholder</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/somewhere">/Somewhere</Link> 
        |
        {" "}
        <Link to="/search">/Search</Link>
      </nav>
    </div>
  );
}