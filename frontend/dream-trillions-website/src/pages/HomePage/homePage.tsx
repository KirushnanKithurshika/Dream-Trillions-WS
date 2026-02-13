// Home.tsx
import React from "react";
import "./homePage.css";
import HomeBG from "../../assets/HomeBG.png";

const Home: React.FC = () => {
  return (
    <section className="home-section">
      <div className="home-outer">
        <div className="home-card">
          {/* LEFT CONTENT */}
          <div className="home-left">
            <p className="home-badge">Dream Trillions</p>

            <h1 className="home-title">
              Building Smart Digital Solutions Across Multiple Industries
            </h1>

            <p className="home-subtitle">
              Dream Trillions designs and develops reliable digital solutions for
              businesses and growing sectors such as Education, Agriculture, and
              Renewable Energy. We focus on practical systems that streamline
              operations, improve efficiency, and support long-term growth.
            </p>

            <ul className="home-points">
              <li>Custom Web & Mobile Applications</li>
              <li>Business Systems (CRM / ERP / Dashboards)</li>
              <li>Education Platforms & Learning Systems</li>
              <li>Agriculture Technology Solutions</li>
              <li>Renewable & Energy Monitoring Systems</li>
              <li>Automation, Integrations & Modern UI/UX</li>
            </ul>

            {/* <div className="home-actions">
              <a className="home-btn primary" href="/contact">
                Get a Quote
              </a>
              <a className="home-btn secondary" href="/services">
                View Services
              </a>
            </div> */}
          </div>


          <div className="home-right">
            <div className="zoom-grid-card">
              <img src={HomeBG} alt="Dream Trillions" className="zoom-grid-img" />

     
              <div className="zoom-grid-overlay" aria-hidden="true" />

              <div className="image-badge">Web • Apps • Systems</div>
            </div>
         </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
