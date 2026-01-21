import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineMail,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { AiOutlineLogin } from "react-icons/ai";

import logo from "../Assets/Logo11.png"; // adjust relative path based on Navbar.js location

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null); // ✅ added for hover
  const location = useLocation();

  useEffect(() => {
    const scrollHandler = () => {
      updateNavbar(window.scrollY >= 20);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  // ✅ Updated linkStyle for smaller navbar items + hover purple effect
  const linkStyle = (path) => ({
    color: location.pathname === path || hoveredPath === path ? "#a259ff" : "#ffffff",
    fontWeight: location.pathname === path ? "600" : "500",
    margin: "0 8px",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    whiteSpace: "nowrap",
    fontSize: "0.85rem",
    padding: "6px 10px",
    borderRadius: "8px",
    background:
      hoveredPath === path ? "rgba(162,89,255,0.15)" : "transparent",
    boxShadow:
      hoveredPath === path ? "0 0 8px rgba(162,89,255,0.6)" : "none",
    borderBottom:
      hoveredPath === path ? "2px solid #a259ff" : "2px solid transparent",
  });

  
  // ✅ Updated dropdown item style
  const dropdownItemStyle = {
    fontSize: "0.85rem",
    padding: "4px 10px",
  };

  // ✅ Updated login button style
  const loginButtonStyle = {
    marginLeft: "12px",
    padding: "4px 12px",
    borderRadius: "16px",
    background: "#d27147",
    color: "#ffffffff",
    fontWeight: "600",
    fontSize: "0.85rem",
    transition: "0.3s",
    display: "flex",
    alignItems: "center",
    gap: "4px",
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      collapseOnSelect
    style={{
  background: "#013879",
  backdropFilter: "blur(10px)",
  transition: "0.4s ease",
  boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
  padding: "10px 0",
}}

    >
      <Container>
        {/* ✅ LOGO ON LEFT */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Matrix HR Technologies"
            style={{ height: "60px", cursor: "pointer" }} // ✅ kept logo size
          />
        </Navbar.Brand>

        <Navbar.Toggle
          onClick={() => updateExpanded(expand ? false : "expanded")}
          aria-controls="responsive-navbar-nav"
          style={{ border: "none", outline: "none" }}
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" style={{ alignItems: "center" }}>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                style={linkStyle("/")}
                onMouseEnter={() => setHoveredPath("/")}
                onMouseLeave={() => setHoveredPath(null)}
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineHome /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                style={linkStyle("/about")}
                onMouseEnter={() => setHoveredPath("/about")}
                onMouseLeave={() => setHoveredPath(null)}
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser /> About
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                style={linkStyle("/project")}
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen /> Projects
              </Nav.Link>
            </Nav.Item> */}

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                style={linkStyle("/resume")}
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument /> Resume
              </Nav.Link>
            </Nav.Item> */}

            {/* ✅ SERVICES DROPDOWN */}
            <NavDropdown
              title="Services"
              id="services-dropdown"
              onMouseEnter={() => setHoveredPath("/services")}
              onMouseLeave={() => setHoveredPath(null)}
              style={{
                color: hoveredPath === "/services" ? "#a259ff" : "#ffffff",
                fontWeight: "500",
                fontSize: "0.85rem",
                background:
                  hoveredPath === "/services"
                    ? "rgba(162,89,255,0.15)"
                    : "transparent",
                borderRadius: "8px",
                padding: "6px 10px",
              }}
            >
              <NavDropdown.Item
                as={Link}
                to="/services/compliance-mgmt"
                onClick={() => updateExpanded(false)}
                style={dropdownItemStyle}
              >
                Establishment Compliances
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/payroll"
                onClick={() => updateExpanded(false)}
                style={dropdownItemStyle}
              >
                Payroll Administration
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/factory-license"
                onClick={() => updateExpanded(false)}
                style={dropdownItemStyle}
              >
                Factory Compliances
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/clra"
                onClick={() => updateExpanded(false)}
                style={dropdownItemStyle}
              >
                CLRA Compliances
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/audits"
                onClick={() => updateExpanded(false)}
                style={dropdownItemStyle}
              >
                Audit Management
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/hr-shared-services"
                onClick={() => updateExpanded(false)}
                style={dropdownItemStyle}
              >
                Register Management
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/statutory-returns"
                onClick={() => updateExpanded(false)}
                style={dropdownItemStyle}
              >
                Statutory Returns & Filings
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/social-security"
                onClick={() => updateExpanded(false)}
                style={dropdownItemStyle}
              >
                Social Security Compliance
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/vendor-compliance"
                onClick={() => updateExpanded(false)}
                style={dropdownItemStyle}
              >
                Contractor & Vendor Compliance
              </NavDropdown.Item>
              {/* <NavDropdown.Item
                as={Link}
                to="/services/inspection-readiness"
                onClick={() => updateExpanded(false)}
                style={dropdownItemStyle}
              >
                Audit & Inspection Readiness
              </NavDropdown.Item> */}
              <NavDropdown.Item
                as={Link}
                to="/services/multi-state-compliance"
                onClick={() => updateExpanded(false)}
                style={dropdownItemStyle}
              >
                Multi-State Compliance
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/compliance-tracking"
                onClick={() => updateExpanded(false)}
                style={dropdownItemStyle}
              >
                Compliance Tracking & Alerts
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/risk-management"
                onClick={() => updateExpanded(false)}
                style={dropdownItemStyle}
              >
                Governance & Risk Management
              </NavDropdown.Item>
            </NavDropdown>

            {/* ✅ DEMO BUTTON */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/demo"
                style={linkStyle("/demo")}
                onMouseEnter={() => setHoveredPath("/demo")}
                onMouseLeave={() => setHoveredPath(null)}
                onClick={() => updateExpanded(false)}
              >
                Demo
              </Nav.Link>
            </Nav.Item>



            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/elibrary"
                style={linkStyle("/elibrary")}
                onMouseEnter={() => setHoveredPath("/elibrary")}
                onMouseLeave={() => setHoveredPath(null)}
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument /> E-Library
              </Nav.Link>
            </Nav.Item>
        
            {/* ✅ CONTACT US ADDED */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                style={linkStyle("/contact")}
                onMouseEnter={() => setHoveredPath("/contact")}
                onMouseLeave={() => setHoveredPath(null)}
                onClick={() => updateExpanded(false)}
              > 
                <AiOutlineMail /> Contact Us
              </Nav.Link>
           </Nav.Item>

            {/* ✅ LOGIN BUTTON */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/login"
                style={loginButtonStyle}
                onMouseEnter={() => setHoveredPath("/login")}
                onMouseLeave={() => setHoveredPath(null)}
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineLogin />Member Login
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                style={loginButtonStyle}
              >
              <AiOutlineLogin />  Register
              </Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
