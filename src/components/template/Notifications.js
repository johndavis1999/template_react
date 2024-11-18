import React from 'react';
import { Link } from 'react-router-dom';

const Notifications = () => {

    return (
        <>
            <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative fs-4" data-bs-auto-close="outside" data-bs-toggle="dropdown">
                    <i className="far fa-bell"></i>
                    <span className="badge-notify">5</span>
                </button>
                <div className="dropdown-menu dropdown-notify dropdown-menu-end shadow">
                    <div className="px-3 py-1 d-flex align-items-center justify-content-between border-bottom">
                        <h5 className="notiy-title mb-0">Notificaciones</h5>
                            <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle dropdown-toggle-nocaret option" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="fas fa-ellipsis-v"></span>
                            </button>
                            <div className="dropdown-menu dropdown-option dropdown-menu-end shadow">
                                <div><Link className="dropdown-item d-flex align-items-center gap-2 py-2" to="#"><i className="fas fa-archive fs-6"></i>Archivar</Link></div>
                                <div><Link className="dropdown-item d-flex align-items-center gap-2 py-2" to="#"><i className="fas fa-check-double fs-6"></i>Marcar como leido</Link></div>
                                <div>
                                    <hr className="dropdown-divider"/>
                                </div>
                                <div><Link className="dropdown-item d-flex align-items-center gap-2 py-2" to="#"><i className="fas fa-list fs-6"></i>Ver màs</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="notify-list ps">
                        <div>
                            <Link className="dropdown-item border-bottom py-2" to="#">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="">
                                        <img src="./admin/user_profile.png" className="rounded-circle" width="45" height="45" alt=""/>
                                    </div>
                                    <div className="">
                                        <h5 className="notify-title">Titulo</h5>
                                        <p className="mb-0 notify-desc">Descripciòn</p>
                                        <p className="mb-0 notify-time">Lunes</p>
                                    </div>
                                    <div className="notify-close position-absolute end-0 me-3">
                                        <i className="fas fa-times fs-6"></i>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
};

export default Notifications;