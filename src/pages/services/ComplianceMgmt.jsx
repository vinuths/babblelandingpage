// src/pages/services/ComplianceMgmt.jsx
import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const complianceServices = [
  { title: "Establishment Registration", description: "Register your establishment under applicable laws.", icon: "🏢" },
  { title: "License Management", description: "Maintain and renew all statutory licenses.", icon: "📄" },
  { title: "Policy Implementation", description: "Implement HR and workplace policies as per law.", icon: "🛠️" },
  { title: "Record Maintenance", description: "Keep all compliance records updated and accurate.", icon: "📂" },
];

const benefits = [
  { title: "Avoid Penalties", description: "Ensure full legal compliance to avoid fines.", icon: "⚖️" },
  { title: "Operational Efficiency", description: "Streamline compliance processes for efficiency.", icon: "📈" },
  { title: "Peace of Mind", description: "Focus on your business while compliance is managed.", icon: "🧘‍♂️" },
];

const ComplianceMgmt = () => {
  const navigate = useNavigate();
  const [hoverDemo, setHoverDemo] = useState(false);
  const [hoverHome, setHoverHome] = useState(false);

  return (
    <section style={{ background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)", minHeight: "100vh" }}>
      {/* HERO SECTION */}
      <Container fluid className="py-5" style={{ background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
        <Container className="text-center py-5">
          <h1 className="fw-bold mb-3 text-white">Establishment Compliances</h1>
          <p className="mb-4 text-white opacity-75" style={{ maxWidth: "700px", margin: "0 auto" }}>
            We manage all your establishment compliance requirements efficiently, ensuring your business adheres to statutory regulations.
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

      {/* SERVICES SECTION */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-5 text-white">Our Services</h2>
        <Row className="gy-4 justify-content-center">
          {complianceServices.map((service, idx) => (
            <Col xs={12} sm={6} md={3} key={idx}>
              <Card
                className="text-center p-4 h-100 border-0 shadow"
                style={{ borderRadius: "16px", background: "#ffffff", color: "#013879", transition: "0.3s" }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "15px" }}>{service.icon}</div>
                <h5 className="fw-bold">{service.title}</h5>
                <p style={{ color: "#013879" }}>{service.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* BENEFITS SECTION */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-5 text-white">Benefits</h2>
        <Row className="gy-4 justify-content-center">
          {benefits.map((benefit, idx) => (
            <Col xs={12} sm={6} md={4} key={idx}>
              <Card
                className="text-center p-4 h-100 border-0 shadow"
                style={{ borderRadius: "16px", background: "#ffffff", color: "#013879", transition: "0.3s" }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "15px" }}>{benefit.icon}</div>
                <h5 className="fw-bold">{benefit.title}</h5>
                <p style={{ color: "#013879" }}>{benefit.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ComplianceMgmt;
