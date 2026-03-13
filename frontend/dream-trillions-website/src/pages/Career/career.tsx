import React from "react";
import "./career.css";
import CareerBG from "../../assets/logo.png";
import { TypeAnimation } from "react-type-animation";

import JobCareers from "../../components/Jobform/jobdapply";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faBrain,
  faCloud,
  faPenRuler,
  faChartLine,
  faSolarPanel,
  faCubes
} from "@fortawesome/free-solid-svg-icons";

const Careers: React.FC = () => {
  return (
    <>
      <section className="career-section">

        <div
          className="career-bg"
          style={{ backgroundImage: `url(${CareerBG})` }}
        ></div>

        <div className="career-outer">
          <div className="career-card">

            <div className="career-center">

              <p className="career-badge">
                <TypeAnimation
                  sequence={["DREAM TRILLIONS CAREERS", 2000]}
                  speed={50}
                  wrapper="span"
                  repeat={0}
                  cursor={false}
                />
              </p>

              <h1 className="career-title">
                Build Your Future With Dream Trillions
              </h1>

              <p className="career-subtitle">
                At Dream Trillions we believe innovation begins with people.
                We are building a team of engineers, designers and innovators
                who want to create meaningful technology solutions that shape
                the future.
              </p>

              <div className="career-icons">

                <div className="career-icon">
                  <FontAwesomeIcon icon={faCode} />
                  <span>Software Engineering</span>
                </div>

                <div className="career-icon">
                  <FontAwesomeIcon icon={faBrain} />
                  <span>Artificial Intelligence</span>
                </div>

                <div className="career-icon">
                  <FontAwesomeIcon icon={faCloud} />
                  <span>Cloud & DevOps</span>
                </div>

                <div className="career-icon">
                  <FontAwesomeIcon icon={faPenRuler} />
                  <span>UI / UX Design</span>
                </div>

                <div className="career-icon">
                  <FontAwesomeIcon icon={faChartLine} />
                  <span>Data Science</span>
                </div>

                <div className="career-icon">
                  <FontAwesomeIcon icon={faSolarPanel} />
                  <span>Renewable Energy</span>
                </div>

                <div className="career-icon">
                  <FontAwesomeIcon icon={faCubes} />
                  <span>Blockchain</span>
                </div>

              </div>

            </div>

          </div>
        </div>

      </section>

      <JobCareers />
    </>
  );
};

export default Careers;