import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <Container
      fluid
      className="footer"
      style={{
        padding: "30px 0 15px",
        backgroundColor: "#013879", // ✅ exact Navbar color
        opacity: 1, // ✅ full opacity
        position: "relative",
        zIndex: 10,
        pointerEvents: "auto",
      }}
    >
      <Row className="text-center text-md-left align-items-start">

        {/* LEFT COLUMN */}
        <Col xs={12} md={3} className="mb-3">
          <h3 style={{ color: "#ffffff", marginBottom: "8px" }}>
            Matrix HR Technologies
          </h3>
          <p style={{ color: "#d9d9d9", fontSize: "14px", marginBottom: "8px" }}>
            Complete compliance management solutions for your organization.
          </p>
          <p style={{ color: "#e6e6e6", fontSize: "14px", marginBottom: 0 }}>
            Email:{" "}
            <a
              href="mailto:binoy@matrixhrservices.com"
              style={{ color: "#ffffff", textDecoration: "none" }}
            >
              binoy@matrixhrservices.com
            </a>
          </p>
        </Col>

        {/* SERVICES COLUMN */}
        <Col xs={12} md={6} className="mb-3">
          <h4 style={{ color: "#ffffff", marginBottom: "15px" }}>Our Services</h4>
          <Row>
            <Col xs={6}>
              <FooterLink to="/services/compliance-mgmt" label="Establishment Compliances" />
              <FooterLink to="/services/payroll" label="Payroll Administration" />
              <FooterLink to="/services/factory-license" label="Factory Compliances" />
              <FooterLink to="/services/clra" label="CLRA Compliances" />
              <FooterLink to="/services/audits" label="Audit Management" />
              <FooterLink to="/services/hr-shared-services" label="Register Management" />
            </Col>
            <Col xs={6}>
              <FooterLink to="/services/statutory-returns" label="Statutory Returns" />
              <FooterLink to="/services/social-security" label="Social Security" />
              <FooterLink to="/services/vendor-compliance" label="Vendor Compliance" />
              <FooterLink to="/services/inspection-readiness" label="Inspection Readiness" />
              <FooterLink to="/services/multi-state-compliance" label="Multi-State Compliance" />
              <FooterLink to="/services/risk-management" label="Risk Management" />
            </Col>
          </Row>
        </Col>

        {/* SOCIAL COLUMN */}
        <Col xs={12} md={3}>
          <h4 style={{ color: "#ffffff", marginBottom: "15px" }}>Connect</h4>
          <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
            <SocialIcon href="https://x.com/MatrixHRService">
              {/* <AiOutlineTwitter size={25} /> */}
            </SocialIcon>
            <SocialIcon href="https://in.linkedin.com/company/matrix-hr-service">
              {/* <FaLinkedinIn size={25} /> */}
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/matrixhrtech/">
              {/* <AiFillInstagram size={25} /> */}
            </SocialIcon>
          </div>
        </Col>
      </Row>

      {/* COPYRIGHT */}
      <Row>
        <Col xs={12} className="text-center mt-3">
          <p style={{ color: "#cccccc", fontSize: "13px", marginBottom: 0 }}>
            © Matrix Compliance. All rights reserved.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

/* ===== SMALL REUSABLE COMPONENTS ===== */
const FooterLink = ({ to, label }) => (
  <Link
    to={to}
    style={{
      display: "block",
      color: "#d9d9d9",
      textDecoration: "none",
      marginBottom: "8px",
      fontSize: "14px",
      transition: "color 0.3s",
    }}
    onMouseOver={(e) => (e.target.style.color = "#ffffff")}
    onMouseOut={(e) => (e.target.style.color = "#d9d9d9")}
  >
    {label}
  </Link>
);

const SocialIcon = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#ffffff",
      transition: "color 0.3s",
    }}
    onMouseOver={(e) => (e.target.style.color = "#d27147")} // optional hover effect
    onMouseOut={(e) => (e.target.style.color = "#ffffff")}
  >
    {children}
  </a>
);

export default Footer;
