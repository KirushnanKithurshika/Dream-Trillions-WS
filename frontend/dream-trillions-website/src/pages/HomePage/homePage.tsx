import React from "react";
import "./homePage.css";
import { Link } from "react-router-dom";
import HomeBG from "../../assets/HomeBG.png";
import HomeBG1 from "../../assets/logo.png";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home: React.FC = () => {
  return (
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

            {/* NEW FEATURE TAGS */}
            <div className="home-tags home-fade-up delay-3">

              <span>AI Solutions</span>
              <span>Cloud Infrastructure</span>
              <span>Web & Mobile Platforms</span>
              <span>Renewable Energy</span>

            </div>

            {/* BUTTON */}
            <div className="home-actions home-fade-up delay-4">

              <Link to="/services" className="home-btn">
                Explore Our Services
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="btn-arrow"
                />
              </Link>

            </div>

          </div>


          {/* RIGHT IMAGE */}
          <div className="home-right home-zoom-in delay-4">

            <div className="zoom-grid-card">

              <img
                src={HomeBG}
                alt="Dream Trillions"
                className="zoom-grid-img"
              />

              <div className="zoom-grid-overlay" />

              {/* <div className="image-badge">
                Web • AI • Cloud • Energy
              </div> */}

              {/* Animated arrow */}
              {/* <div className="image-arrow">
                <FontAwesomeIcon icon={faArrowRight} />
              </div> */}

            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default Home;