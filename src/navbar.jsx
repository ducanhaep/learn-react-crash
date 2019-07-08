import React, { Component } from 'react'
const Navbar = (props) => {
  
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar <span className="badge badge-pill badge-secondary">{props.totalCounter}</span>
        </a>
      </nav>
    </div>
  );
}
export default Navbar;
