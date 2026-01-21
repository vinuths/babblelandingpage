// src/pages/services/InspectionReadiness.jsx
import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const readinessFeatures = [
  {
    title: "Audit & Inspection Readiness",
    description: "Always prepared with accurate, inspection-ready records",
    icon: "⚖️",
  },
  {
    title: "Document Verification",
    description: "Ensure all statutory and compliance documents are complete and accurate",
    icon: "✅",
  },
  {
    title: "Gap Analysis",
    description: "Identify compliance gaps and take corrective actions proactively",
    icon: "📋",
  },
  {
    title: "Internal Audits",
    description: "Conduct periodic audits to maintain readiness for inspections",
    icon: "📚",
  },
  {
    title: "Employee Preparedness",
    description: "Train employees on processes, records, and audit protocols",
    icon: "👥",
  },
  {
    title: "Regulatory Updates",
    description: "Stay updated with changes in labour laws and regulations",
    icon: "🔄",
  },
  {
    title: "Risk Mitigation",
    description: "Reduce non-compliance risks and avoid penalties",
    icon: "✔️",
  },
  {
    title: "Reporting & Dashboards",
    description: "Real-time dashboards for management insights on compliance readiness",
    icon: "📊",
  },
  {
    title: "Corrective Action Tracking",
    description: "Track and implement all audit observations effectively",
    icon: "🔍",
  },
  {
    title: "Continuous Improvement",
    description: "Establish a culture of audit readiness and compliance excellence",
    icon: "💡",
  },
];

const InspectionReadiness = () => {
  const navigate = useNavigate();
  const [hoverDemo, setHoverDemo] = useState(false);
  const [hoverHome, setHoverHome] = useState(false);

  return (
    <section style={{ background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)", minHeight: "100vh" }}>
      {/* HERO SECTION */}
      <Container fluid className="py-5" style={{ background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
        <Container className="text-center py-5">
          <h1 className="fw-bold mb-3 text-white">Audit & Inspection Readiness</h1>
          <p className="mb-4 text-white opacity-75" style={{ maxWidth: "700px", margin: "0 auto" }}>
            Always prepared with accurate, inspection-ready records
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
          {readinessFeatures.map((feature, idx) => (
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

export default InspectionReadiness;
