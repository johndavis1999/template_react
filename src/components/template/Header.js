import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <>
            <header className="top-header">
                <nav className="navbar navbar-expand align-items-center gap-4">
                    <div className="flex-grow-1"></div>
                    <ul className="navbar-nav gap-1 nav-right-links align-items-center">
                        <li className="nav-item dropdown">
                            <button href="#" className="btn dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
                                <img src="./admin/user_profile.png" className="rounded-circle p-1 border" width="45" height="45" alt=""/>
                            </button>
                            <div className="dropdown-menu dropdown-user dropdown-menu-end shadow">
                                <button className="dropdown-item d-flex align-items-center gap-2 py-2" href="#"><i className="fas fa-user"></i>Profile</button>
                                <hr className="dropdown-divider"/>
                                <button className="dropdown-item d-flex align-items-center gap-2 py-2" href="#"><i className="fas fa-power"></i>Logout</button>
                            </div>
                        </li>
                    </ul>
                    <div className="btn-toggle d-block d-xl-none">
                        <button className='btn' href="#">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;