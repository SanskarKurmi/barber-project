import React from "react";
import "./Products.css";

const products = [
  { title: "New Fresh Wash", price: "$56.00" },
  { title: "New Fresh Wash", price: "$51.39" },
  { title: "New Fresh Wash", price: "$63.87" },
  { title: "New Fresh Wash", price: "$47.89" },
];

export default function Products() {
  return (
    <section className="products-section">
      <div className="container">
        <div className="text-center mb-5">
          <p className="section-eyebrow text-uppercase">Our Products</p>
          <h2 className="section-title">
            Evoke the experience of one of our barber shops
          </h2>
        </div>

        <div className="row g-4">
          {products.map((product, index) => (
            <div
              className="col-12 col-sm-6 col-lg-3"
              key={`${product.title}-${index}`}
            >
              <div className="product-card h-100">
                <div className="product-photo d-flex align-items-center justify-content-center">
                  <span>Product image</span>
                </div>
                <div className="product-body text-center">
                  <div className="rating mb-2">
                    {"★".repeat(4)}
                    <span className="text-muted">★</span>
                  </div>
                  <h5 className="mb-1">{product.title}</h5>
                  <p className="product-price mb-0">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

