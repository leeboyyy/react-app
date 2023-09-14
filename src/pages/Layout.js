import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
      <>
        {/* <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav> */}
        <nav class="navbar navbar-expand-sm bg-dark  fixed-top navbar-dark sticky-top">
  <div class="container-fluid">
    
    
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link className="nav-link active" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/resume">Resume</Link>
        </li>  
       
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Technologies</a>
          <ul class="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/html">HTML</Link>
              </li>
            <li>
              <Link className="dropdown-item" to="/css">CSS</Link>
              </li>
            <li>
              <Link className="dropdown-item" to="/javascript">JavaScript</Link>
              </li>
            
            <li>
              <Link className="dropdown-item" to="/bootstrap">Bootstrap</Link>
              </li>
            <li>
              <Link className="dropdown-item" to="/jquery">JQuery</Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/manual">Manual Testing</Link>
              </li>
            <li>
              <Link className="dropdown-item" to="/selenium">Selenium Testing</Link>
              </li>
          </ul>
        </li>
        <li class="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
    <div class="d-flex">
        <ul class="navbar-nav">
            <li class="nav-item">
              <Link className="nav-link" to="/signup">Sign Up</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/contact">Sign In</Link>
            </li>
        </ul>
    </div>
  </div>
</nav>
  
        <Outlet />
      </>
    )
  };
  
export default Layout;
