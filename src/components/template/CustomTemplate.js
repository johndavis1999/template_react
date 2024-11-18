import React, { useEffect } from 'react';

const CustomTemplate = () => {
    // Función para establecer una cookie con una duración de un año
    const setCookie = (name, value, days) => {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Convertir días a milisegundos
        document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
    };

    // Función para obtener el valor de una cookie por nombre
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    };

    // Al montar el componente, cargar el tema guardado en las cookies
    useEffect(() => {
        const savedTheme = getCookie("selected-theme");
        if (savedTheme) {
            document.documentElement.setAttribute("data-bs-theme", savedTheme);
        }
    }, []);

    // Cambiar el tema y guardar en la cookie
    const handleThemeChange = (theme) => {
        document.documentElement.setAttribute("data-bs-theme", theme);
        setCookie("selected-theme", theme, 365); // Guardar en cookie con duración de 1 año
    };

    return (
        <>
            <button 
                className="btn btn-grd btn-primary position-fixed bottom-0 end-0 m-3 d-flex align-items-center gap-2" 
                type="button" 
                data-bs-toggle="offcanvas" 
                data-bs-target="#staticBackdrop"
            >
                <i className="fas fa-palette fs-3"></i>
            </button>
            
            <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="staticBackdrop">
                <div className="offcanvas-header border-bottom h-70">
                    <div className="">
                        <h5 className="mb-0">Personalizar tema</h5>
                        {/* <p className="mb-0">Customize your theme</p> */}
                    </div>
                    <a className="primaery-menu-close" data-bs-dismiss="offcanvas">
                        <i className="fas fa-times"></i>
                    </a>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <p>Opciones</p>
                        <div className="row g-3">
                            <div className="col-12 col-xl-6">
                                <input 
                                    type="radio" 
                                    className="btn-check" 
                                    name="theme-options" 
                                    id="BlueTheme"
                                    onClick={() => handleThemeChange("blue-theme")} 
                                />
                                <label className="btn btn-outline-secondary d-flex flex-column gap-1 align-items-center justify-content-center p-4" htmlFor="BlueTheme">
                                    <span className="material-icons-outlined">contactless</span>
                                    <span>Azùl</span>
                                </label>
                            </div>
                            <div className="col-12 col-xl-6">
                                <input 
                                    type="radio" 
                                    className="btn-check" 
                                    name="theme-options" 
                                    id="LightTheme"
                                    onClick={() => handleThemeChange("light")} 
                                />
                                <label className="btn btn-outline-secondary d-flex flex-column gap-1 align-items-center justify-content-center p-4" htmlFor="LightTheme">
                                    <span className="material-icons-outlined">light_mode</span>
                                    <span>Claro</span>
                                </label>
                            </div>
                            <div className="col-12 col-xl-6">
                                <input 
                                    type="radio" 
                                    className="btn-check" 
                                    name="theme-options" 
                                    id="DarkTheme"
                                    onClick={() => handleThemeChange("dark")} 
                                />
                                <label className="btn btn-outline-secondary d-flex flex-column gap-1 align-items-center justify-content-center p-4" htmlFor="DarkTheme">
                                    <span className="material-icons-outlined">dark_mode</span>
                                    <span>Oscuro</span>
                                </label>
                            </div>
                            <div className="col-12 col-xl-6">
                                <input 
                                    type="radio" 
                                    className="btn-check" 
                                    name="theme-options" 
                                    id="SemiDarkTheme"
                                    onClick={() => handleThemeChange("semi-dark")} 
                                />
                                <label className="btn btn-outline-secondary d-flex flex-column gap-1 align-items-center justify-content-center p-4" htmlFor="SemiDarkTheme">
                                    <span className="material-icons-outlined">contrast</span>
                                    <span>Semi Oscuro</span>
                                </label>
                            </div>
                            <div className="col-12 col-xl-6">
                                <input 
                                    type="radio" 
                                    className="btn-check" 
                                    name="theme-options" 
                                    id="BoderedTheme"
                                    onClick={() => handleThemeChange("bodered-theme")} 
                                />
                                <label className="btn btn-outline-secondary d-flex flex-column gap-1 align-items-center justify-content-center p-4" htmlFor="BoderedTheme">
                                    <span className="material-icons-outlined">border_style</span>
                                    <span>Bordeado</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomTemplate;