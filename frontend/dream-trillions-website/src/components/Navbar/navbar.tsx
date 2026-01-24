import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo.png";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="navbar" ref={navRef}>
      {/* Logo */}
      <div className="navbar-logo">
        <img src={logo} alt="Dream Trillions Logo" className="logo" />
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

      {/* Navigation */}
      <ul className={`navbar-links ${menuOpen ? "show" : ""}`}>
        <li><NavLink to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About Us</NavLink></li>

        <li className="dropdown">
          <span className="nav-link">Services</span>
          <ul className="dropdown-menu">
            <li><NavLink to="/services/software" onClick={() => setMenuOpen(false)}>Software Development</NavLink></li>
            <li><NavLink to="/services/web" onClick={() => setMenuOpen(false)}>Web Development</NavLink></li>
            <li><NavLink to="/services/mobile" onClick={() => setMenuOpen(false)}>Mobile App Development</NavLink></li>
            <li><NavLink to="/services/ui-ux" onClick={() => setMenuOpen(false)}>UI / UX Design</NavLink></li>
            <li><NavLink to="/services/cloud" onClick={() => setMenuOpen(false)}>Cloud & IT Solutions</NavLink></li>
          </ul>
        </li>

        <li><NavLink to="/solutions" className="nav-link" onClick={() => setMenuOpen(false)}>Solutions</NavLink></li>
        <li><NavLink to="/portfolio" className="nav-link" onClick={() => setMenuOpen(false)}>Portfolio</NavLink></li>
        <li><NavLink to="/careers" className="nav-link" onClick={() => setMenuOpen(false)}>Careers</NavLink></li>
        <li><NavLink to="/blog" className="nav-link" onClick={() => setMenuOpen(false)}>Blog</NavLink></li>
        <li><NavLink to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
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
