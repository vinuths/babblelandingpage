// src/pages/services/RiskManagement.jsx
import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const riskFeatures = [
  {
    title: "Corporate Governance Framework",
    description: "Establish strong governance structures aligned with regulatory and ethical standards",
    icon: "🏛️",
  },
  {
    title: "Risk Identification",
    description: "Identify operational, financial, legal, and compliance risks proactively",
    icon: "🔎",
  },
  {
    title: "Risk Assessment & Analysis",
    description: "Evaluate risk impact and likelihood to prioritize mitigation strategies",
    icon: "📊",
  },
  {
    title: "Policy & Controls Design",
    description: "Develop internal controls, SOPs, and policies to reduce business exposure",
    icon: "📘",
  },
  {
    title: "Compliance Risk Monitoring",
    description: "Continuous monitoring to ensure adherence to statutory and internal controls",
    icon: "🛡️",
  },
  {
    title: "Management Reporting",
    description: "Clear dashboards and reports for leadership decision-making",
    icon: "📈",
  },
];

const RiskManagement = () => {
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
          <h1 className="fw-bold mb-3 text-white">Governance & Risk Management</h1>
          <p className="mb-4 text-white opacity-75" style={{ maxWidth: "700px", margin: "0 auto" }}>
            Strengthen corporate governance and proactively manage risks to protect your business and ensure long-term sustainability.
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
        <h2 className="text-center fw-bold mb-5 text-white">Key Capabilities</h2>
        <Row className="gy-4 justify-content-center">
          {riskFeatures.map((feature, idx) => (
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

export default RiskManagement;
