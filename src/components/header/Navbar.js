import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg   fw-semibold fs-5">
    
    <Link className="navbar-brand" to='/'><img src='images/logo.svg' alt='logo'/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-lg-flex flex-row-reverse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/New'>New</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to='/Popular'>Popular</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to='/Trending'>Trending</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to='/Categorie'>Categorie</Link>
        </li>
      </ul>
      
    </div>
  
</nav>
  )
}
