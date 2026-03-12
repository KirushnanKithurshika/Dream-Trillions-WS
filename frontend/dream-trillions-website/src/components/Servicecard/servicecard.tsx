import React from "react";
import "./servicecard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLayerGroup } from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    title: "Software, Web & Mobile Applications",
    description:
      "We build modern software platforms including enterprise systems, web applications, and mobile apps that help organizations streamline operations and scale efficiently.",
  },
  {
    title: "Artificial Intelligence & Automation",
    description:
      "AI-powered automation tools, intelligent assistants, and machine learning solutions that help businesses improve productivity and decision making.",
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description:
      "Scalable cloud architecture, DevOps pipelines, infrastructure automation, and secure deployment environments for modern applications.",
  },
  {
    title: "UI / UX & Product Design",
    description:
      "Human-centered digital design focusing on usability, clean interfaces, and engaging product experiences.",
  },
  {
    title: "Data Analytics & Business Intelligence",
    description:
      "Advanced analytics platforms and dashboards that transform raw data into meaningful insights for strategic decisions.",
  },
  {
    title: "Renewable Energy & Smart Systems",
    description:
      "Solar monitoring platforms, energy optimization systems, and smart infrastructure supporting sustainable energy adoption.",
  },
];

const ServiceCards: React.FC = () => {
  return (
    <div className="servicecards-grid">
      {services.map((service, index) => (
        <div className="servicecards-card" key={index}>

          {/* ICON */}
          <div className="servicecards-icon">
            <FontAwesomeIcon icon={faLayerGroup} />
          </div>

          <h3 className="servicecards-title">
            {service.title}
          </h3>

          <p className="servicecards-desc">
            {service.description}
          </p>

          {/* ARROW */}
          <div className="servicecards-arrow">
            <FontAwesomeIcon icon={faArrowRight} />
          </div>

        </div>
      ))}
    </div>
  );
};

export default ServiceCards;