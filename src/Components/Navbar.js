import React from 'react'
import {Link} from "react-router-dom";  

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">Global Weather</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">India</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/usa">USA</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/london">London</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/pakistan">Pakistan</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/japan">Japan</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/australia">Ausralia</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/germany">Germany</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/canada">Canada</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar