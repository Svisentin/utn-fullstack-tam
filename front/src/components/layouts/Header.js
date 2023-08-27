import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="text-center sticky-top  bg-white">
      <nav className="navbar shadow p-4">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand m-0 p-0"><p className="logo ms-2 mb-0 p-0">/TAM.</p></NavLink>
          <ul className="list-unstyled d-flex align-items-center m-0 pe-5 text-black">
            <li className="nav-item ms-5"><NavLink to="/quiensoy" className="nav-link fs-7 activa" activeclassname="active">/quien soy</NavLink></li>
            <li className="nav-item ms-5"><NavLink to="/laburos" className="nav-link fs-7 activa" activeclassname="active">/laburos</NavLink></li>
            <li className="nav-item ms-5"><NavLink to="/charlame" className="nav-link fs-7 activa" activeclassname="active">/charlame</NavLink></li>
            <li className="nav-item ms-5 "><NavLink to='http://localhost:3001/admin/novedades' className="nav-link fs-7 activa" activeclassname="active">/novedades</NavLink></li>
            <li className="nav-item ms-5"><NavLink to='http://localhost:3000/admin/login' className="nav-link fs-7 activa" activeclassname="active">/login</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
