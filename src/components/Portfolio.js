// Portfolio.js
import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">

        <h1 className="sub-title">My Work</h1>

        <div className="work-list">

          {/* Project 1 */}
          <div className="work">
            <img src={process.env.PUBLIC_URL +"/images/work1.png"} alt="Savify Project" />

            <div className="layer">
              <h3>Savify</h3>
              <p>
                This app allows students to access exclusive discounts on
                products, services, and experiences.
              </p>

              <a href="https://savify.africa" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="work">
            <img src={process.env.PUBLIC_URL +"/images/work2.jpg"} alt="Other Projects" />

            <div className="layer">
              <h3>Other Projects</h3>
              <p>
                Development of various systems including accounting software,
                booking systems, and custom web applications.
              </p>

              <a href="https://github.com/PeterDavid3800" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
                <a
          href="https://github.com/PeterDavid3800"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          See More
        </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Portfolio;