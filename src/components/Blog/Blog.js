import React from "react";
import "./Blog.css";

const posts = [
  {
    category: "Haircutting",
    date: "30 June, 2022",
    title: "We are a Haircut Salon Based in South Melbourne",
  },
  {
    category: "Hair Color",
    date: "25 June, 2022",
    title: "Online booking appointment for Salon, Hair Salon",
  },
  {
    category: "Lather Shave",
    date: "21 June, 2022",
    title: "Customising your shave is fun and easy",
  },
];

export default function Blog() {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="text-center mb-5">
          <p className="section-eyebrow text-uppercase">Blog and Article</p>
          <h2 className="section-title">Read Our Blog and News</h2>
        </div>

        <div className="row g-4">
          {posts.map((post) => (
            <div className="col-md-4" key={post.title}>
              <article className="blog-card h-100">
                <div className="blog-photo d-flex align-items-center justify-content-center">
                  <span>Blog image</span>
                </div>
                <div className="blog-body">
                  <span className="badge bg-light text-dark me-3">
                    {post.category}
                  </span>
                  <span className="text-muted small">{post.date}</span>
                  <h5 className="mt-3">{post.title}</h5>
                  <button className="link-btn mt-3">READ MORE &gt;&gt;</button>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

