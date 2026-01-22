// src/pages/services/Audits.jsx
import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const auditTypes = [
  {
    title: "Internal Process Audits",
    description: "Evaluate internal processes and ensure efficiency.",
    icon: "📝",
  },
  {
    title: "Financial Audits",
    description: "Analyze financial statements for accuracy and risks.",
    icon: "🏦",
  },
  {
    title: "Operational Audits",
    description: "Assess operational efficiency and identify gaps.",
    icon: "📈",
  },
];

const benefits = [
  {
    title: "Identify Gaps & Risks",
    description: "Identify gaps and risks in processes.",
    icon: "📝",
  },
  {
    title: "Regulatory Compliance",
    description: "Ensure regulatory and statutory compliance.",
    icon: "⚖️",
  },
  {
    title: "Operational Efficiency",
    description: "Improve operational efficiency.",
    icon: "📈",
  },
];

const Audits = () => {
  const navigate = useNavigate();

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)",
        minHeight: "100vh",
      }}
    >
      {/* HERO SECTION */}
      <Container
        fluid
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Container className="text-center py-5">
          <h1 className="fw-bold mb-3 text-white">Audit Services</h1>
          <p
            className="mb-4 text-light opacity-75"
            style={{ maxWidth: "700px", margin: "0 auto" }}
          >
            Conduct internal and external audits efficiently with expert guidance.
          </p>
          {/* ✅ ORANGE BUTTONS */}
          <button
            onClick={() => navigate("/contact")}
            style={{
              backgroundColor: "#d27147",
              border: "none",
              color: "#fff",
              padding: "10px 25px",
              fontWeight: "600",
              borderRadius: "8px",
              cursor: "pointer",
              marginRight: "12px",
            }}
          >
            Book a Demo
          </button>
          <button
            onClick={() => navigate("/")}
            style={{
              backgroundColor: "#d27147",
              border: "none",
              color: "#fff",
              padding: "10px 25px",
              fontWeight: "600",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Back to Home
          </button>
        </Container>
      </Container>
    
      {/* TYPES OF AUDITS */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-5 text-white">Types of Audits</h2>
        <Row className="gy-4 justify-content-center">
          {auditTypes.map((audit, idx) => (
            <Col xs={12} sm={6} md={3} key={idx}>
              <Card
                className="text-center p-4 h-100 shadow"
                style={{
                  borderRadius: "16px",
                  background: "#ffffff", // ✅ white cards
                  color: "#013879", // ✅ blue text
                  transition: "0.3s",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "15px" }}>
                  {audit.icon}
                </div>
                <h5 className="fw-bold">{audit.title}</h5>
                <p>{audit.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* BENEFITS SECTION */}
      <Container className="py-5" style={{ background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)" }}>
        <h2 className="text-center fw-bold mb-5 text-white">Benefits</h2>
        <Row className="gy-4 justify-content-center">
          {benefits.map((benefit, idx) => (
            <Col xs={12} sm={6} md={4} key={idx}>
              <Card
                className="text-center p-4 h-100 shadow"
                style={{
                  borderRadius: "16px",
                  background: "#ffffff", // ✅ white cards
                  color: "#013879", // ✅ blue text
                  transition: "0.3s",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "15px" }}>
                  {benefit.icon}
                </div>
                <h5 className="fw-bold">{benefit.title}</h5>
                <p>{benefit.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Audits;
