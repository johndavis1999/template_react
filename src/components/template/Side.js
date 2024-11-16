import React from 'react'
import { Link } from 'react-router-dom';

const Side = () => {

    return (
        <>
            <aside className="sidebar-wrapper" data-simplebar="init">
                <div className="simplebar-wrapper" style={{ margin: "0px" }}>
                    <div className="simplebar-height-auto-observer-wrapper">
                        <div className="simplebar-height-auto-observer"></div>
                    </div>
                    <div className="simplebar-mask">
                        <div className="simplebar-offset" style={{ right: "0px", bottom: "0px" }}>
                            <div className="simplebar-content-wrapper" style={{ height: "100%", overflow: "hidden scroll" }}>
                                <div className="simplebar-content" style={{ padding: "0px" }}>
                                    <div className="sidebar-header">
                                        <div className="logo-icon">
                                            <img src="./logo512.png" className="logo-img" alt="logo"/>
                                        </div>
                                        <div className="logo-name flex-grow-1">
                                            <h5 className="mb-0">Template</h5>
                                        </div>
                                        <div className="sidebar-close d-lg-none">
                                            <span className="material-icons-outlined"></span>
                                        </div>
                                    </div>
                                    <div className="sidebar-nav">
                                        <ul className="metismenu" id="sidenav">
                                            <li>
                                                <Link to='#' className="has-arrow">
                                                    <div className="parent-icon">
                                                        <i className="fas fa-home"></i>
                                                    </div>
                                                    <div className="menu-title">Dashboard</div>
                                                </Link>
                                                <ul className="mm-collapse">
                                                    <li>
                                                        <Link to={'/'}><i className="fas fa-arrow-right"></i>Dashboard</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to={'/test'}>
                                                    <div className="parent-icon">
                                                        <i className="fas fa-cogs"></i>
                                                    </div>
                                                    <div className="menu-title">Test</div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'/blank'}>
                                                    <div className="parent-icon">
                                                        <i className="fas fa-cogs"></i>
                                                    </div>
                                                    <div className="menu-title">Blank</div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="simplebar-placeholder" style={{ width: "auto", height: "1170px" }}></div>
                </div>
            </aside>
        </>
    );
};

export default Side;