import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  /* close menu when clicking outside */

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        (menuOpen || servicesOpen) &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen, servicesOpen]);

  /* close when route changes */

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link ${isActive ? "active" : ""}`;

  return (
    <nav className="navbar" ref={navRef}>

      {/* Logo */}

      <div className="navbar-logo">
        <NavLink to="/">
          <img src={logo} alt="Dream Trillions Logo" />
        </NavLink>
      </div>

      {/* Hamburger */}

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links */}

      <ul className={`navbar-links ${menuOpen ? "show" : ""}`}>

        <li>
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
        </li>

        <li>
          <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
        </li>

        {/* SERVICES */}

        <li className={`dropdown ${servicesOpen ? "open" : ""}`}>

          <div
            className="services-header"
            onClick={() => setServicesOpen(!servicesOpen)}
          >

            <NavLink
              to="/services"
              className={navLinkClass}
              onClick={(e) => e.stopPropagation()}
            >
              Services
            </NavLink>

            <FontAwesomeIcon
              icon={faChevronDown}
              className="services-arrow"
            />

          </div>

          <ul className="dropdown-menu">

            <li><NavLink to="/services/software">Software Development</NavLink></li>
            <li><NavLink to="/services/web">Web Development</NavLink></li>
            <li><NavLink to="/services/mobile">Mobile App Development</NavLink></li>
            <li><NavLink to="/services/ui-ux">UI / UX Design</NavLink></li>
            <li><NavLink to="/services/cloud">Cloud & IT Solutions</NavLink></li>
            <li><NavLink to="/services/solar-installation">Renewable Energy solutions</NavLink></li>

          </ul>

        </li>

        <li><NavLink to="/portfolio" className={navLinkClass}>Portfolio</NavLink></li>
        <li><NavLink to="/careers" className={navLinkClass}>Careers</NavLink></li>
        <li><NavLink to="/blog" className={navLinkClass}>Blog</NavLink></li>
        {/* <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li> */}

      </ul>

      {/* CTA */}

      <div className="navbar-cta">
        <NavLink to="/contact" className="cta-button">
          Get in touch
        </NavLink>
      </div>

    </nav>
  );
};

export default Navbar;