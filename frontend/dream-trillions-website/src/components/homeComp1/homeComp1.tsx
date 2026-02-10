import React from "react";
import "./CompanyIntro.css";
import companyImage from "../../assets/company-work.jpg";

const CompanyIntro: React.FC = () => {
  return (
    <section className="company-intro">
      {/* Left - Image */}
      <div className="company-intro-image">
        <img src={companyImage} alt="Software Development Environment" />
      </div>

      {/* Right - Content */}
      <div className="company-intro-content">
        <h2>About Dream Trillions (Pvt) Ltd</h2>
        <p>
          Dream Trillions (Pvt) Ltd is a technology-driven company focused on
          delivering innovative software solutions that empower businesses to
          grow in the digital era. We specialize in building scalable,
          secure, and user-centric applications tailored to modern business
          needs.
        </p>

        <p>
          Our expertise spans software development, web and mobile applications,
          UI/UX design, and cloud-based IT solutions. With a passionate team of
          engineers and designers, we transform ideas into reliable digital
          products that create real value.
        </p>

        <ul>
          <li>✔ Custom Software Development</li>
          <li>✔ Web & Mobile Applications</li>
          <li>✔ UI / UX Design</li>
          <li>✔ Cloud & IT Solutions</li>
        </ul>
      </div>
    </section>
  );
};

export default CompanyIntro;
