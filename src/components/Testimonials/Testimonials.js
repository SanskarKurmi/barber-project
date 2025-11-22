import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Devin Booker",
    role: "Regular User",
    quote:
      "Proin vel ipsum id risus ultrices scelerisque. Suspendisse mattis sit amet leo vel convallis.",
  },
  {
    name: "Michelle Yeoh",
    role: "Regular User",
    quote:
      "Proin vel ipsum id risus ultrices scelerisque. Suspendisse mattis sit amet leo vel convallis.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4">
            <p className="section-eyebrow text-uppercase">Testimonial</p>
            <h2 className="section-title mb-3">What Our Customer Say's</h2>
            <p className="section-lead text-muted">
              Barber trading style and proven strategy to make a living.
            </p>
            <button className="gold-btn mt-4">WRITE REVIEW &gt;&gt;</button>
          </div>
          <div className="col-lg-8">
            <div className="row g-4">
              {testimonials.map((testimonial) => (
                <div className="col-md-6" key={testimonial.name}>
                  <article className="testimonial-card h-100">
                    <div className="testimonial-avatar">
                      <span>{testimonial.name[0]}</span>
                    </div>
                    <p className="testimonial-quote">{testimonial.quote}</p>
                    <div className="rating mb-2">
                      {"★".repeat(4)}
                      <span className="text-muted">★</span>
                    </div>
                    <h6 className="mb-0">{testimonial.name}</h6>
                    <small className="text-muted">{testimonial.role}</small>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

