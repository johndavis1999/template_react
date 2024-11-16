// src/routes/TestRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Template from '../components/template/Index';

// docentes
import Index from '../components/Test';

const TestRoutes = () => {
    return (
        <Routes>
            <Route
                    path=""
                    element={
                        <Template>
                            <Index />
                        </Template>
                    }
                />
        </Routes>
    );
};

export default TestRoutes;
