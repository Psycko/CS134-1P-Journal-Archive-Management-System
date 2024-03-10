import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import logo from '../img/RSHS_1_Logo.png';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    const navToHome = () => {
        navigate('/category/all');
    }

    return (
        <div>
          <nav class="navbar navbar-light tw-bg-steel-blue tw-sticky">
            <div class="container-fluid">
              <a class="navbar-brand">
                <img src={logo} width="40" alt="Logo" height="40" class="d-inline-block tw-cursor-pointer" onClick={navToHome}/>
                <label class="tw-pl-2 tw-font-rubik">Online Archive System</label>
              </a>

              <div class="tw-bg-steel-blue tw-rounded-lg">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              </div>
              
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <Link class="nav-link active" aria-current="page" to="/category/all">
                    <label class="tw-cursor-pointer">Home</label>
                  </Link>
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