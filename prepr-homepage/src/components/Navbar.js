import React from 'react'
import logo from '../assets/preprLogo.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src={logo} alt='Prepr Logo'/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="/">Explore</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Dashboard</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">My Challenges</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">My Labs</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Career Explorer</a>
                </li>


                
            </ul>
            <i class="bi bi-bell-fill"></i>
            <i class="bi bi-chat-left-fill"></i>
            <i class="bi bi-question-circle-fill"></i>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <i class="bi bi-person-square"></i>
            <i class="bi bi-grid-3x3-gap-fill"></i>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
