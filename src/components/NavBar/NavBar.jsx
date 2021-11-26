import { Link } from "react-router-dom";
import "./NavBar.css";
import Button from "./../Button/Button";
import { useState } from "react";

const NavBar = () => {
  
  const [activeLink, setActiveLink] = useState("")

  const handleClick = (e) => {
    setActiveLink(e.target.name)
  }

  return (
    <nav>
      <div className="logo">Steam</div>
      <ul className="lista-container">
        <li className={`lista-navbar ${activeLink === "home" ? "clikad" : ""}`}>
          <Link onClick={handleClick} name="home" className="link-navbar" to="/">
            Home
          </Link>
        </li>
        <li className={`lista-navbar ${activeLink === "favoritos"  ? "clikad" : ""}`}>
          <Link onClick={handleClick} name="favoritos"  className="link-navbar" to="/favoritos">
            Favoritos
          </Link>
        </li>
        <li className={`lista-navbar ${activeLink === "profile"  ? "clikad" : ""}`}>
          <Link onClick={handleClick} name="profile"  className="link-navbar" to="/profile">
            Profile
          </Link>
        </li>
        <li className={`lista-navbar login ${activeLink === "login"  ? "clikad" : ""}`}>
          <Link onClick={handleClick} name="login" className="link-navbar" to="/login">
            <Button className="btn-nav">
                Login
            </Button>
          </Link>
        </li>
        <li className={`lista-navbar registrar ${activeLink === "registrar"  ? "clikad" : ""}`}>
          <Link onClick={handleClick} name="registrar" className="link-navbar" to="/registrar">
            <Button className="btn-nav">
                Registrar
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
