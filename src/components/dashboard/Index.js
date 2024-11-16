import React from 'react';
import { Link } from 'react-router-dom';

const Test = () => {
    return (
        <div className="main-content">
            <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                <div className="breadcrumb-title pe-3">
                    Dashboard
                </div>
                <div className="ps-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0 p-0">
                            <li className="breadcrumb-item active" aria-current="page">
                                Analysis
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="ms-auto">
                    <div className="btn-group">
                        <button type="button" className="btn btn-outline-primary">Settings</button>
                        <button type="button" className="btn btn-outline-primary split-bg-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">	<span className="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">	
                            <Link className="dropdown-item" to='#'>Action</Link>
                            <Link className="dropdown-item" to='#'>Another action</Link>
                            <Link className="dropdown-item" to='#'>Something else here</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to='#'>Separated link</Link>
                        </div>
                    </div>
                </div>
            </div>
            Esta sección esta en desarrollo..
        </div>
    );
};

export default Test;