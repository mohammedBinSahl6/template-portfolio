import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-sm  navbar-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Developer</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to='/projects'>Projects</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/about'>About</Link>
        </li>
      </ul>
    </div>

    <div className="so-holder">
        <a className="link-s" href="https://www.instagram.com/"><i className="bi bi-instagram"></i></a>
        <a className="link-s" href="https://github.com/mohammedBinSahl6"><i className="bi bi-github"></i></a>
        <a className="link-s" href="https://www.facebook.com/"><i className="bi bi-facebook"></i></a>
    </div>
  </div>
</nav>
    )
}