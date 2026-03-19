import React from "react";
import "./aboutus.css";
import AboutImg from "../../assets/HomeBG.png";

const About: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-head">
          <p className="about-badge">About Dream Trillions</p>
          <h1>Driven by Innovation, Built for Business Growth</h1>
          <p className="about-intro">
            Dream Trillions is committed to delivering smart digital solutions
            that help businesses modernize operations, improve efficiency, and
            scale with confidence. We combine technology, innovation, and
            practical business understanding to create reliable solutions for
            long-term success.
          </p>
        </div>

        <div className="about-card">
          <div className="about-left">
            <div className="about-image-wrap">
              <img src={AboutImg} alt="About Dream Trillions" className="about-image" />
              <div className="about-image-overlay"></div>
            </div>
          </div>

          <div className="about-right">
            <h2>Who We Are</h2>
            <p>
              We are a forward-thinking company focused on building digital
              products, backend support systems, cloud-based services, and
              scalable business solutions across multiple industries.
            </p>
            <p>
              Our goal is to support organizations with modern, dependable, and
              high-quality technology services that solve real business
              challenges and create measurable value.
            </p>

            <div className="about-highlight-box">
              <h3>What We Do</h3>
              <p>
                From software development and backend support to cloud
                infrastructure, web platforms, mobile solutions, and renewable
                energy related innovations, we help businesses move forward with
                confidence.
              </p>
            </div>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-info-box">
            <h3>Our Mission</h3>
            <p>
              To empower businesses with innovative, reliable, and scalable
              digital solutions that improve performance and support sustainable
              growth.
            </p>
          </div>

          <div className="about-info-box">
            <h3>Our Vision</h3>
            <p>
              To become a trusted technology and solutions partner recognized
              for excellence, innovation, and long-term business impact across
              industries.
            </p>
          </div>

          <div className="about-info-box">
            <h3>Our Strength</h3>
            <p>
              We combine technical expertise, business understanding, and
              practical execution to deliver solutions that are both modern and
              results-driven.
            </p>
          </div>
        </div>

        <div className="about-why">
          <h2>Why Choose Us</h2>
          <div className="about-why-grid">
            <div className="about-why-card">
              <h4>Reliable Solutions</h4>
              <p>
                We build dependable systems and services designed for real-world
                business needs.
              </p>
            </div>

            <div className="about-why-card">
              <h4>Business-Focused Approach</h4>
              <p>
                Our work is guided by practical value, helping businesses grow,
                automate, and improve operations.
              </p>
            </div>

            <div className="about-why-card">
              <h4>Scalable Support</h4>
              <p>
                We provide long-term support and backend service capabilities
                that grow with your business.
              </p>
            </div>

            <div className="about-why-card">
              <h4>Multi-Industry Experience</h4>
              <p>
                We serve across digital technology, cloud services, software
                platforms, and energy-related solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;