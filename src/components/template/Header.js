import React from 'react'
import { Link } from 'react-router-dom';
import Notifications from './Notifications';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {

    return (
        <>
            <header className="top-header">
                <nav className="navbar navbar-expand align-items-center gap-4">
                    <div className="flex-grow-1"></div>
                    <ul className="navbar-nav gap-1 nav-right-links align-items-center">
                        <li className="nav-item dropdown">
                            <DarkModeToggle />
                        </li>
                        <Notifications />
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative" data-bs-toggle="dropdown">
                                <img src="./admin/user_profile.png" className="rounded-circle p-1 border" width="45" height="45" alt=""/>
                            </button>
                            <div className="dropdown-menu dropdown-user dropdown-menu-end shadow">
                                <a class="dropdown-item  gap-2 py-2" href="#">
                                    <div class="text-center">
                                    <img src="./admin/user_profile.png" class="rounded-circle p-1 shadow mb-3" width="90" height="90" alt=""/>
                                    <h5 class="user-name mb-0 fw-bold">User Name</h5>
                                    </div>
                                </a>
                                <hr className="dropdown-divider"/>
                                <Link className="dropdown-item d-flex align-items-center gap-2 py-2" to='#'><i className="fas fa-user"></i>Profile</Link>
                                <hr className="dropdown-divider"/>
                                <Link className="dropdown-item d-flex align-items-center gap-2 py-2" to='#'><i className="fas fa-power-off"></i>Logout</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="btn-toggle d-block d-xl-none">
                                <button className='btn'>
                                    <i className="fas fa-bars"></i>
                                </button>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;