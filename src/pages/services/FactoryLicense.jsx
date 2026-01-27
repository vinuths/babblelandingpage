// src/pages/services/FactoryLicense.jsx
import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const licenseTypes = [
  { title: "Factory License", description: "License application, renewals and compliance tracking.", icon: "🏭" },
  {
  title: "Factory Plan Approval",
  description: "Approval of factory building plans as mandated under the Factories Act.",
  icon: "📝",
},
{
  title: "PCB-CO & CE",
  description: "Consent to Establish and Operate approvals from the Pollution Control Board.",
  icon: "🏭",
},
{ title: "Building / Occupancy License", description: "Ensure compliance with local building norms.", icon: "⚖️" },
];

const benefits = [
  { title: "Reduce Risk of Penalties", description: "Prevent fines and ensure full compliance with regulations.", icon: "📝" },
  { title: "Uninterrupted Operations", description: "Maintain seamless business operations with timely renewals.", icon: "🏭" },
  { title: "Streamlined Documentation", description: "Centralized and organized documentation for compliance.", icon: "📈" },
];

const FactoryLicense = () => {
  const navigate = useNavigate();
  const [hoverDemo, setHoverDemo] = useState(false);
  const [hoverHome, setHoverHome] = useState(false);

  return (
    <section style={{ background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)", minHeight: "100vh" }}>
      {/* HERO SECTION */}
      <Container fluid className="py-5" style={{ background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
        <Container className="text-center py-5">
          <h1 className="fw-bold mb-3 text-white">Factory Compliances</h1>
          <p className="mb-4 text-white opacity-75" style={{ maxWidth: "700px", margin: "0 auto" }}>
            Ensuring that your factories meet all legal, safety, and environmental compliance standards efficiently.
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

      {/* LICENSE TYPES */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-5 text-white">Types of Licenses</h2>
        <Row className="gy-4 justify-content-center">
          {licenseTypes.map((item, idx) => (
            <Col xs={12} sm={6} md={3} key={idx}>
              <Card
                className="text-center p-4 h-100 border-0 shadow"
                style={{ borderRadius: "16px", background: "#ffffff", color: "#013879", transition: "0.3s" }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "15px" }}>{item.icon}</div>
                <h5 className="fw-bold">{item.title}</h5>
                <p style={{ color: "#013879" }}>{item.description}</p>
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

export default FactoryLicense;
