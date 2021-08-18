import React from "react";
import './index.css';
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="content__navbar">
      <ul className ="content__navbar__list">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </ul>
    </div>
  );
};

export default Menu;
