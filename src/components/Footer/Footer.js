import React from "react";
import "./Footer.css";

const footerLinks = [
  "Trend Haircut",
  "Hair Washing",
  "Hair Coloring",
  "Facial hair Trim",
  "Lather shave",
  "Head Massage",
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-gallery">
        <div className="container-fluid px-0">
          <div className="row g-0">
            <div className="col-6 col-md-4 col-lg-2">
              <div className="gallery-tile d-flex align-items-center justify-content-center">
                <span>Add gallery image</span>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="gallery-tile d-flex align-items-center justify-content-center">
                <span>Add gallery image</span>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="gallery-tile d-flex align-items-center justify-content-center">
                <span>Add gallery image</span>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="gallery-tile d-flex align-items-center justify-content-center">
                <span>Add gallery image</span>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="gallery-tile d-flex align-items-center justify-content-center">
                <span>Add gallery image</span>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="gallery-tile d-flex align-items-center justify-content-center">
                <span>Add gallery image</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="row gy-4 align-items-center">
            <div className="col-lg-5">
              <div className="footer-brand d-flex align-items-center">
                <div className="footer-logo-circle me-3">B</div>
                <div>
                  <h4 className="mb-1">Barbex</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <ul className="footer-links list-unstyled d-flex flex-wrap mb-0">
                {footerLinks.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
            <div className="col-lg-3">
              <form className="newsletter-form">
                <label htmlFor="newsletter-email" className="form-label">
                  Email Address
                </label>
                <div className="input-group">
                  <input
                    id="newsletter-email"
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                  <button className="btn submit-btn" type="button" disabled>
                    →
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
