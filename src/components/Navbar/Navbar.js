import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-dark-container">
      <div className="container nav-inner d-flex justify-content-between align-items-center">

        <div className="d-flex align-items-center">
          <div className="nav-logo d-flex align-items-center">
            <div className="nav-logo-circle me-2">B</div>
            <span className="logo-text">Barbex</span>
          </div>

          <div className="nav-hotline d-none d-md-flex align-items-center ms-5">
            <span className="line"></span>
            <p className="mb-0 ms-3 hotline-text">
              <strong>Hotline</strong> +91 9136838824
            </p>
          </div>
        </div>

        <ul className="nav-menu d-none d-md-flex mb-0">
          <li><span className="nav-link-custom">Home</span></li>
          <li><span className="nav-link-custom">Pages +</span></li>
          <li><span className="nav-link-custom">Shop +</span></li>
          <li><span className="nav-link-custom">Blog +</span></li>
          <li><span className="nav-link-custom">Contact</span></li>
        </ul>

        <div className="d-none d-md-flex align-items-center">
          <FiSearch className="search-icon me-4" />
          <button className="booking-btn">BOOKING NOW &gt;&gt;</button>
        </div>

        <div className="mobile-toggle d-flex d-md-none flex-column"
          onClick={() => setIsOpen(!isOpen)}>
          <span></span><span></span><span></span>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-menu d-md-none">
          <ul className="list-unstyled mb-0">
            <li><span className="mobile-link">Home</span></li>
            <li><span className="mobile-link">Pages</span></li>
            <li><span className="mobile-link">Shop</span></li>
            <li><span className="mobile-link">Blog</span></li>
            <li><span className="mobile-link">Contact</span></li>
          </ul>

          <button className="booking-btn w-100 mt-3">BOOKING NOW</button>
        </div>
      )}
    </nav>
  );
}
