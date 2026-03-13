import React from "react";
import "./service.css";
import ServiceBG from "../../assets/logo.png";
import { TypeAnimation } from "react-type-animation";
import ServiceCards from "../../components/Servicecard/servicecard";

const Services: React.FC = () => {
    return (
        <>
            <section className="career-section">

                {/* background layer */}
                <div
                    className="service-bg"
                    style={{ backgroundImage: `url(${ServiceBG})` }}
                ></div>

                <div className="service-outer">
                    <div className="service-card">

                        <div className="service-center">
                            <p className="service-badge">
                                <TypeAnimation
                                    sequence={["DREAM TRILLIONS", 2000]}
                                    speed={50}
                                    wrapper="span"
                                    repeat={0}
                                    cursor={false}
                                />
                            </p>
                            <h1 className="service-title">
                                Technology & Renewable Energy Solutions
                            </h1>

                            <p className="service-subtitle">
                                We build modern software systems, web applications,
                                mobile apps, and renewable energy solutions that help
                                businesses operate efficiently and grow sustainably.
                            </p>

                            <div className="service-grid">

                                <div className="service-item">
                                    Software, Web & Mobile Applications
                                </div>

                                <div className="service-item">
                                    Artificial Intelligence & Automation
                                </div>

                                <div className="service-item">
                                    Cloud Infrastructure & DevOps
                                </div>

                                <div className="service-item">
                                    UI / UX & Product Design
                                </div>

                                <div className="service-item">
                                    Data Analytics & Business Intelligence
                                </div>

                                <div className="service-item">
                                    Renewable Energy & Smart Systems
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </section>
            <ServiceCards />
        </>
    );
};

export default Services;