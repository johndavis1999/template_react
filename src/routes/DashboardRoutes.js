// src/routes/DashboardRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Template from '../components/template/Index';

// docentes
import Index from '../components/dashboard/Index';

const DashboardRoutes = () => {
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

export default DashboardRoutes;
