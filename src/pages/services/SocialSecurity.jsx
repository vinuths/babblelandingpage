// src/pages/services/SocialSecurity.jsx
import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const socialSecurityFeatures = [
  { title: "PF Compliance", description: "Automated Provident Fund calculations, deposits, and reporting.", icon: "🏦" },
  { title: "ESI Compliance", description: "Ensure timely ESI contributions and statutory filings.", icon: "🩺" },
  { title: "Employee Benefits", description: "Manage gratuity, leave encashment, and other statutory benefits.", icon: "🎁" },
  { title: "Centralized Dashboard", description: "Monitor all social security compliance in one unified view.", icon: "📊" },
  { title: "Compliance Alerts", description: "Automated reminders for PF, ESI, and other deadlines.", icon: "⏰" },
  { title: "Audit Readiness", description: "Maintain inspection-ready records for regulatory audits.", icon: "✅" },
  { title: "Document Management", description: "Organize and maintain employee compliance documents efficiently.", icon: "📄" },
];

const SocialSecurity = () => {
  const navigate = useNavigate();
  const [hoverDemo, setHoverDemo] = useState(false);
  const [hoverHome, setHoverHome] = useState(false);

  return (
    <section style={{ background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)", minHeight: "100vh" }}>
      {/* HERO SECTION */}
      <Container
        fluid
        className="py-5"
        style={{ background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)", borderBottom: "1px solid rgba(0,0,0,0.1)" }}
      >
        <Container className="text-center py-5">
          <h1 className="fw-bold mb-3 text-white">Social Security Compliance</h1>
          <p className="mb-4 text-white opacity-75" style={{ maxWidth: "700px", margin: "0 auto" }}>
            We handle all social security compliance requirements such as PF, ESI, and other employee benefits.
          </p>

          {/* ORANGE BUTTONS */}
          <button
            onClick={() => navigate("/contact")}
            onMouseEnter={() => setHoverDemo(true)}
            onMouseLeave={() => setHoverDemo(false)}
            style={{
              backgroundColor: hoverDemo ? "#b55b36" : "#d27147",
              border: "none",
              color: "#ffffff",
              padding: "8px 20px",
              marginRight: "12px",
              borderRadius: "6px",
              fontWeight: "500",
              fontSize: "0.9rem",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Book a Demo
          </button>

          <button
            onClick={() => navigate("/")}
            onMouseEnter={() => setHoverHome(true)}
            onMouseLeave={() => setHoverHome(false)}
            style={{
              backgroundColor: hoverHome ? "#b55b36" : "#d27147",
              border: "none",
              color: "#ffffff",
              padding: "8px 20px",
              borderRadius: "6px",
              fontWeight: "500",
              fontSize: "0.9rem",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Back to Home
          </button>
        </Container>
      </Container>

      {/* FEATURES SECTION */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-5 text-white">Key Features</h2>
        <Row className="gy-4 justify-content-center">
          {socialSecurityFeatures.map((feature, idx) => (
            <Col xs={12} sm={6} md={4} key={idx}>
              <Card
                className="text-center p-4 h-100 border-0 shadow"
                style={{ borderRadius: "16px", background: "#ffffff", color: "#013879", transition: "0.3s" }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "15px" }}>{feature.icon}</div>
                <h5 className="fw-bold">{feature.title}</h5>
                <p style={{ color: "#013879" }}>{feature.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SocialSecurity;
