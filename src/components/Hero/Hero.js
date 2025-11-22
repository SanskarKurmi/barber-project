import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-container d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-lg-6 hero-text text-white">
            <p className="welcome-text">Welcome To Our Barbex</p>
            <h1 className="hero-title mb-3">
              Best Haircut Salon <br /> in the City
            </h1>
            <div className="hero-cta d-flex align-items-center mt-4">
              <button className="booking-btn">READ MORE &gt;&gt;</button>
              <div className="hero-slider-controls ms-4">
                <button className="hero-circle-btn">
                  <FiArrowLeft />
                </button>
                <button className="hero-circle-btn">
                  <FiArrowRight />
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-image-placeholder d-flex flex-column justify-content-center align-items-center text-center text-white">
              <span>Barber Image Here</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
