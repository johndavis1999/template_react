import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Side = () => {
    const [isDashboardOpen, setIsDashboardOpen] = useState(false);
    const location = useLocation();

    const toggleDashboard = (event) => {
        event.preventDefault(); // Evitar que el Link redirija
        setIsDashboardOpen(!isDashboardOpen);
    };

    // Este useEffect se ejecuta cada vez que cambia la ruta (location)
    useEffect(() => {
        // Verificar el tamaño de la ventana
        const isLargeScreen = window.innerWidth > 1199;

        // Cambiar las clases del body dependiendo del tamaño de la pantalla
        document.body.classList.toggle("toggled", isLargeScreen);
        document.body.classList.remove("sidebar-hovered");

        // Manejar los eventos de hover si la pantalla es grande
        if (isLargeScreen) {
            const sidebarWrapper = document.querySelector(".sidebar-wrapper");
            // Eliminar cualquier evento de hover previo
            sidebarWrapper?.removeEventListener("mouseenter", handleMouseEnter);
            sidebarWrapper?.removeEventListener("mouseleave", handleMouseLeave);
            // Agregar los eventos de hover
            sidebarWrapper?.addEventListener("mouseenter", handleMouseEnter);
            sidebarWrapper?.addEventListener("mouseleave", handleMouseLeave);
        }

        // Limpiar cualquier evento de hover si no es una pantalla grande
        return () => {
            const sidebarWrapper = document.querySelector(".sidebar-wrapper");
            sidebarWrapper?.removeEventListener("mouseenter", handleMouseEnter);
            sidebarWrapper?.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [location]);

    // Funciones para manejar el hover
    const handleMouseEnter = () => {
        document.body.classList.add("sidebar-hovered");
    };

    const handleMouseLeave = () => {
        document.body.classList.remove("sidebar-hovered");
    };

    // useEffect para escuchar el clic del botón .btn-toggle
    useEffect(() => {
        const btnToggle = document.querySelector(".btn-toggle");
        const handleClick = () => {
            if (window.innerWidth <= 1199) {
                document.body.classList.toggle("toggled");
            }
        };

        if (btnToggle) {
            btnToggle.addEventListener("click", handleClick);
        }

        return () => {
            if (btnToggle) {
                btnToggle.removeEventListener("click", handleClick);
            }
        };
    }, []); // Se ejecuta solo una vez al cargar el componente

    // useEffect para escuchar el clic en el ícono de cierre (.sidebar-close)
    useEffect(() => {
        const sidebarClose = document.querySelector(".sidebar-close");
        const handleCloseClick = () => {
            document.body.classList.remove("toggled");
        };

        if (sidebarClose) {
            sidebarClose.addEventListener("click", handleCloseClick);
        }

        // Limpiar el evento cuando el componente se desmonte
        return () => {
            if (sidebarClose) {
                sidebarClose.removeEventListener("click", handleCloseClick);
            }
        };
    }, []); // Se ejecuta solo una vez al cargar el componente

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
                                            <img src="./logo512.png" className="logo-img" alt="logo" />
                                        </div>
                                        <div className="logo-name flex-grow-1">
                                            <h5 className="mb-0">Template</h5>
                                        </div>
                                        <div className="sidebar-close d-xl-none">
                                            <i className="fas fa-times"></i>
                                        </div>
                                    </div>
                                    <div className="sidebar-nav">
                                        <ul className="metismenu" id="sidenav">
                                            <li>
                                                <Link to="#" onClick={toggleDashboard} className="has-arrow">
                                                    <div className="parent-icon">
                                                        <i className="fas fa-home"></i>
                                                    </div>
                                                    <div className="menu-title">Dashboard</div>
                                                </Link>
                                                {/* Submenú */}
                                                <ul className={`mm-collapse ${isDashboardOpen ? 'mm-show' : ''}`} style={{ display: isDashboardOpen ? 'block' : 'none' }}>
                                                    <li>
                                                        <Link to={'/'} className="menu-link"><i className="fas fa-chevron-right"></i>Dashboard</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to={'/test'} className="menu-link">
                                                    <div className="parent-icon">
                                                        <i className="fas fa-cogs"></i>
                                                    </div>
                                                    <div className="menu-title">Test</div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'/blank'} className="menu-link">
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
