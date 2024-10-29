import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return ( 
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
            <div class="container">
                <Link className="navbar-brand" to="/">
                <img src="/images/logo.svg" alt="Logo" style={{width: "120px", height: "auto"}} />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto p-2">
                        <li className="nav-item ">
                            <Link className="nav-link" to="/signup">Signup</Link>
                        </li>
                        <li className="nav-item mr-5">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/product">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/support">Support</Link>
                        </li>
                    </ul>
                 </div>
            </div>
        </nav>
        </>
    );
}

export default Navbar;