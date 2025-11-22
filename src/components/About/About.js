import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-lg-6">
            <div className="about-gallery position-relative">
              <div className="about-img about-img-main d-flex justify-content-center align-items-center">
                <span>Add image</span>
              </div>
              <div className="about-img about-img-secondary d-flex justify-content-center align-items-center">
                <span>Add image</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <p className="section-eyebrow text-uppercase">About Us</p>
            <h2 className="section-title mb-3">
              Best Haircut Salons <br /> For Men Women
            </h2>
            <p className="section-lead">
              "Haircut" is a term used to describe when a person removes the hair
              on their head. This is done to allow for better access to the part
              of the body that needs cutting.
            </p>
            <p>
              We're a leading independent salon, offering everything from
              haircuts to exfoliation
            </p>

            <button className="gold-btn mt-3">READ MORE &gt;&gt;</button>
          </div>
        </div>
      </div>
    </section>
  );
}

