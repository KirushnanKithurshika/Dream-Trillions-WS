import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo.png";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

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
          <img src={logo} alt="Dream Trillions Logo" className="logo" />
        </NavLink>
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navbar Links */}
      <ul className={`navbar-links ${menuOpen ? "show" : ""}`}>
        <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
        <li><NavLink to="/about" className={navLinkClass}>About Us</NavLink></li>

        <li
          className={`dropdown ${servicesOpen ? "open" : ""}`}
          onClick={() => setServicesOpen((prev) => !prev)}
        >
          
          <span className="nav-link">
            Services{" "}
            <span className={`arrow ${servicesOpen ? "up" : "down"}`}></span>
          </span>
          <ul className="dropdown-menu">
            <li><NavLink to="/services/software" className={navLinkClass}>Software Development</NavLink></li>
            <li><NavLink to="/services/web" className={navLinkClass}>Web Development</NavLink></li>
            <li><NavLink to="/services/mobile" className={navLinkClass}>Mobile App Development</NavLink></li>
            <li><NavLink to="/services/ui-ux" className={navLinkClass}>UI / UX Design</NavLink></li>
            <li><NavLink to="/services/cloud" className={navLinkClass}>Cloud & IT Solutions</NavLink></li>
             <li><NavLink to="/services/solar-installation" className={navLinkClass}>Solar Installation</NavLink></li>
          </ul>
        </li>

        <li><NavLink to="/portfolio" className={navLinkClass}>Portfolio</NavLink></li>
        <li><NavLink to="/careers" className={navLinkClass}>Careers</NavLink></li>
        <li><NavLink to="/blog" className={navLinkClass}>Blog</NavLink></li>
        <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
      </ul>

      <div className="navbar-cta">
        <NavLink to="/get-quote" className="cta-button">
          Get a Quote
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
