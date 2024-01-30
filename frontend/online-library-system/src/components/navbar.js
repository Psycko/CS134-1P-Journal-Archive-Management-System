import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';

export default function Header() {
    return (
        <div>
        
          <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand">
                <img src={logo} width="30" alt="Logo" height="24" class="d-inline-block align-text-top"/>
                Online Library System
              </a>

              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <Link class="nav-link active" aria-current="page" to="/"> Home</Link>
                  <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Manuscripts</a>
                  <ul class="dropdown-menu">
                    <li>
                      <Link class="dropdown-item" to="/category/lifescience"> Life Science</Link>
                    </li>

                    <li>
                      <Link class="dropdown-item" to="/category/socialscience"> Social Science</Link>
                    </li>

                    <li>
                      <Link class="dropdown-item" to="/category/mathematics">Mathematics</Link>
                    </li>

                    <li>
                      <Link class="dropdown-item" to="/category/robotics">Robotics</Link>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </nav>

    
     
      </div>
    )
}