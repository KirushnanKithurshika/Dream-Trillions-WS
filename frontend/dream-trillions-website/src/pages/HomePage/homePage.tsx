import React from "react";
import "./homePage.css";
import HomeBG from "../../assets/HomeBG.png";
import HomeBG1 from "../../assets/logo.png";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ServiceCards from "../../components/Servicecard/servicecard";

const Home: React.FC = () => {
  const scrollToServices = () => {
    const section = document.getElementById("services-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <section className="home-section">
        {/* moving background */}
        <div
          className="home-bg"
          style={{ backgroundImage: `url(${HomeBG1})` }}
        ></div>

        <div className="home-outer">
          <div className="home-card">
            <div className="home-left">
              <p className="home-badge">
                <TypeAnimation
                  sequence={["Dream Trillions", 2000]}
                  speed={50}
                  wrapper="span"
                  repeat={0}
                  cursor={false}
                />
              </p>

              <h1 className="home-title home-fade-up delay-1">
                Building Smart Digital Solutions Across Multiple Industries
              </h1>

              <p className="home-subtitle home-fade-up delay-2">
                Dream Trillions designs and develops reliable digital solutions
                that help businesses modernize operations, automate processes,
                and build scalable technology platforms for long-term growth.
              </p>

              <div className="home-support-box home-fade-up delay-3">
                <h3 className="home-support-heading">
                  Trusted Backend Support for Growing Companies
                </h3>
                <p className="home-support-text">
                  We also provide reliable backend support services for other
                  companies, helping them manage technical operations,
                  development workflows, maintenance, integrations, and scalable
                  system support with confidence.
                </p>
              </div>

              <div className="home-tags home-fade-up delay-3">
                <span>AI Solutions</span>
                <span>Cloud Infrastructure</span>
                <span>Web & Mobile Platforms</span>
                <span>Renewable Energy</span>
                <span>Backend Support</span>
              </div>

              <div className="home-actions home-fade-up delay-4">
                <button onClick={scrollToServices} className="home-btn">
                  Explore Our Services
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="btn-arrow"
                  />
                </button>
              </div>
            </div>

            <div className="home-right home-zoom-in delay-4">
              <div className="zoom-grid-card">
                <img
                  src={HomeBG}
                  alt="Dream Trillions"
                  className="zoom-grid-img"
                />
                <div className="zoom-grid-overlay" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services-section" className="services-preview-section">
        <div className="services-preview-head">
          <p className="services-preview-badge">Our Expertise</p>
          <h2>Solutions Designed to Power Your Business Forward</h2>
          <p>
            Explore our wide range of professional services built to help
            businesses innovate, scale, and succeed across digital and energy
            sectors.
          </p>
        </div>

        <ServiceCards />
      </section>
    </>
  );
};

export default Home;