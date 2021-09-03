import React from 'react'
import './Navbar.scss';
import SearchPage from '../SearchPage';
import CardWidget from './CardWidget'
import { NavLink } from 'react-router-dom';



const NavBar = () => {

    return (
        <>



            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <div className="container-fluid">

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <a className="navbar-brand mt-2 mt-lg-0" href="/">
                        <img
                            src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
                            height="15"
                            alt=""
                            loading="lazy"
                        />
                    </a>
                    <CardWidget />

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="./home">Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="./products">Productos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="./about">Contacto</NavLink>
                            </li>
                        </ul>
                        <SearchPage />

                    </div>

                </div>

            </nav>


        </>

    )
}

export default NavBar
