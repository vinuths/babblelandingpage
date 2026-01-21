// src/pages/services/CLRA.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const clraServices = [
  { title: "Registration of Contractors", description: "Registration of contract labour contractors", icon: "📝" },
  { title: "Compliance Monitoring", description: "Compliance monitoring and reporting", icon: "⚖️" },
  { title: "Record Maintenance", description: "Document and wage record maintenance", icon: "📂" },
  { title: "Audits & Inspections", description: "Periodic audits and inspections", icon: "🔍" },
];

const benefits = [
  { title: "Reduce Legal Risk", description: "Reduce legal risk and penalties", icon: "⚖️" },
  { title: "Contractor Compliance", description: "Ensure compliance across all contractors", icon: "📝" },
  { title: "Save Administrative Effort", description: "Save administrative effort with automated tracking", icon: "💼" },
];

const CLRA = () => {
  const navigate = useNavigate();

  // ✅ Inline orange button style
  const orangeButtonStyle = {
    backgroundColor: "#d27147",
    border: "none",
    color: "#fff",
    fontWeight: "500",
    padding: "8px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "0.3s",
  };

  const orangeButtonHover = (e) => {
    e.target.style.opacity = "0.85";
  };
  const orangeButtonLeave = (e) => {
    e.target.style.opacity = "1";
  };

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
          <h1 className="fw-bold mb-3" style={{ color: "#ffffff" }}>CLRA Compliance</h1>
          <p
            className="mb-4"
            style={{ maxWidth: "700px", margin: "0 auto", color: "#ffffff", opacity: 0.85 }}
          >
            Ensure compliance with the Contract Labour (Regulation & Abolition) Act effectively.
          </p>
          <button
            style={orangeButtonStyle}
            onClick={() => navigate("/contact")}
            onMouseEnter={orangeButtonHover}
            onMouseLeave={orangeButtonLeave}
          >
            Book a Demo
          </button>
          <button
            style={{ ...orangeButtonStyle, marginLeft: "10px" }}
            onClick={() => navigate("/")}
            onMouseEnter={orangeButtonHover}
            onMouseLeave={orangeButtonLeave}
          >
            Back to Home
          </button>
        </Container>
      </Container>

      {/* SERVICES SECTION */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-5" style={{ color: "#013879" }}>Our Services</h2>
        <Row className="gy-4 justify-content-center">
          {clraServices.map((service, idx) => (
            <Col xs={12} sm={6} md={3} key={idx}>
              <Card
                className="text-center p-4 h-100 border-0 shadow"
                style={{
                  borderRadius: "16px",
                  background: "#ffffff",
                  color: "#013879",
                  transition: "0.3s",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "15px" }}>{service.icon}</div>
                <h5 className="fw-bold">{service.title}</h5>
                <p>{service.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* BENEFITS SECTION */}
      <Container className="py-5" style={{ background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)" }}>
        <h2 className="text-center fw-bold mb-5" style={{ color: "#013879" }}>Benefits</h2>
        <Row className="gy-4 justify-content-center">
          {benefits.map((benefit, idx) => (
            <Col xs={12} sm={6} md={4} key={idx}>
              <Card
                className="text-center p-4 h-100 border-0 shadow"
                style={{
                  borderRadius: "16px",
                  background: "#ffffff",
                  color: "#013879",
                  transition: "0.3s",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "15px" }}>{benefit.icon}</div>
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

export default CLRA;
