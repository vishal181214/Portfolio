import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top" style={{ backgroundColor: "rgb(253, 240, 223)", width: '100%' }}>
      <div className='container-fluid'>
        <a style={{ color: "rgb(42, 101, 93)", fontWeight: "600" }} className="navbar-brand ms-5" href="#">Vishal Gayakawad</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 me-5">
              <li className="nav-item me-5">
                <button className="nav-link active" aria-current="page" ><Link data-bs-dismiss="offcanvas" className='fix-01' to="#top-navbar" smooth>Home</Link></button>
              </li>
              <li className="nav-item"> <hr /></li>
              <li className="nav-item me-5">
                <button className="nav-link active" aria-current="page" data-bs-dismiss="offcanvas"><Link className='fix-01' to="#about-me-id" smooth>About</Link></button>
              </li>
              <li className="nav-item"> <hr /></li>
              <li className="nav-item me-5">
                <button className="nav-link active" aria-current="page" data-bs-dismiss="offcanvas"><Link className='fix-01' to="#portfolio-id" smooth>Portfolio</Link></button>
              </li>
              <li className="nav-item"> <hr /></li>
              <li className="nav-item me-5">
                <button className="nav-link active" aria-current="page" data-bs-dismiss="offcanvas"><Link className='fix-01' to="#resume-id" smooth>Resume</Link></button>
              </li>
              <li className="nav-item"> <hr /></li>
              <li className="nav-item me-5">
                <button className="nav-link active" aria-current="page" data-bs-dismiss="offcanvas"><Link className='fix-01' to="#contact-id" smooth>Contact</Link></button>
              </li>
              <li className="nav-item"> <hr /></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    // </div>
  )
}

export default Navbar;