import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <Link to="/">Home Page</Link> | <Link to="about">About</Link> |{" "}
      <Link to="courses">Courses</Link>
    </nav>
  );
}

export default Header;
