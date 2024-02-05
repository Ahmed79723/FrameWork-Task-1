import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return <>
   <nav className="navbar navbar-expand-lg bg-dark navbar-dark position-fixed z-3 w-100 py-3">
  <div className="container">
    <Link className="navbar-brand fw-bold" to="/Home">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link fw-bold" aria-current="page" to="/About">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold" to="/Portofolio">PORTFOLIO</Link>
        </li>
        <li className="nav-item fw-bold">
          <Link className="nav-link" to="/Contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
    
  }
}
