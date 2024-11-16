import React from 'react'

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