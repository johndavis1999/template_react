import React from 'react'
import { Link } from 'react-router-dom';

const Main = ({ children }) => {

    return (
        <>
            <main className="main-wrapper">
                {children}
            </main>
        </>
    );
};

export default Main;