import React from 'react';

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
                            <li className="breadcrumb-item">
                                <a href="#">
                                    <i className="bx bx-home-alt"></i>
                                </a>
                            </li>
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
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">	<a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div><a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                </div>
            </div>
            Esta sección esta en desarrollo..
        </div>
    );
};

export default Test;