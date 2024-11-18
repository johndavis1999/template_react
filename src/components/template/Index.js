import React from 'react';
import Header from './Header';
import Side from './Side';
import CustomTemplate from './CustomTemplate';
import Main from './Main';

const Template = ({ children }) => {
    return (
        <>
        <Header/>
        <Side/>
        <CustomTemplate/>
        <Main children={children}/>
        </>
    );
}

export default Template; // Asegúrate de tener esta línea al final del archivo
