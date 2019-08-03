import React from "react";
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>The Most Amazing Website</h1>
      <p>That was ever created in the history of mankind.</p>
      <Link to="about" className="btn btn-primary">About Page</Link>
    </div>
  );
}

export default HomePage;
