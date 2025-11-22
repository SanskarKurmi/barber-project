import React from "react";
import {
  FiScissors,
  FiDroplet,
  FiFeather,
  FiSmile,
  FiTrendingUp,
  FiCheckCircle,
} from "react-icons/fi";
import "./Services.css";

export default function Services() {
  return (
    <section className="services-section">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <p className="section-eyebrow text-uppercase">Our Services</p>
          <h2 className="section-title">Popular Hair Cutting and Salon</h2>
        </div>

        <div className="row g-4">

          <div className="col-6 col-md-4 col-lg-2">
            <div className="service-card text-center">
              <span className="service-icon"><FiTrendingUp /></span>
              <p className="mb-0">Trend Haircut</p>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <div className="service-card text-center">
              <span className="service-icon"><FiDroplet /></span>
              <p className="mb-0">Hair Washing</p>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <div className="service-card text-center">
              <span className="service-icon"><FiFeather /></span>
              <p className="mb-0">Hair Color</p>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <div className="service-card text-center">
              <span className="service-icon"><FiScissors /></span>
              <p className="mb-0">Facial Hair Trim</p>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <div className="service-card text-center">
              <span className="service-icon"><FiSmile /></span>
              <p className="mb-0">Lather Shave</p>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <div className="service-card text-center">
              <span className="service-icon"><FiCheckCircle /></span>
              <p className="mb-0">Head Massage</p>
            </div>
          </div>

        </div>

        <div className="service-highlight row align-items-center mt-5">
          <div className="col-lg-5">
            <div className="highlight-image d-flex align-items-center justify-content-center">
              <span>Add image here</span>
            </div>
          </div>

          <div className="col-lg-7">
            <p className="section-eyebrow text-uppercase">Why Customers Love Us</p>
            <h3 className="section-title fs-2">Best Facial Hair Trim At Home Treatment</h3>
            <p>
              Phasellus vitae purus ac urna consequat facilisis a vel leo.
              Maecenas hendrerit lacinia mollis. Fusce in leo lectus.
              Pellentesque vel mi, nec risus malesuada.
            </p>

            <ul className="list-unstyled mb-4">
              <li>✓ Easy to use salon special navigation</li>
              <li>✓ We care about our customer satisfaction</li>
            </ul>

            <button className="gold-btn">BOOKING APPOINTMENT &gt;&gt;</button>
          </div>
        </div>
      </div>
    </section>
  );
}

