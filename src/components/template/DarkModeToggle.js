import React, { useState, useEffect } from 'react';

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

const DarkModeToggle = () => {
    // Estado para el tema, 'dark' o 'light'
    const [theme, setTheme] = useState(() => {
        // Recuperar el tema guardado en la cookie, si existe
        const savedTheme = getCookie("selected-theme");
        return savedTheme || 'light'; // Si no existe, usar 'light' por defecto
    });

    useEffect(() => {
        // Aplicar el tema al 'html' cuando el componente se monte
        document.documentElement.setAttribute('data-bs-theme', theme);
    }, [theme]);

    // Cambiar el tema y guardar en la cookie
    const handleThemeChange = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme); // Cambiar el estado del tema
        setCookie('selected-theme', newTheme, 365); // Guardar el nuevo tema en la cookie con duración de 1 año
    };

    return (
        <div className="dark-mode fs-5" onClick={handleThemeChange}>
            <i className={theme === 'dark' ? 'far fa-sun' : 'fas fa-moon'}></i>
        </div>
    );
};

export default DarkModeToggle;
