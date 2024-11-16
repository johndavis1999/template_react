import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Template from './components/template/Index';
import Blank from './components/blank/Index';

//routes
import DashboardRoutes from './routes/DashboardRoutes';
import TestRoutes from './routes/TestRoutes';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardRoutes />} />
                <Route path="/test" element={<TestRoutes />} />
                <Route path="/blank" element={<Template><Blank /></Template>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
