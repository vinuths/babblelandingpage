// src/pages/services/Audits.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
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
    description: "Detect compliance gaps and hidden business risks early.",
    icon: "🔍",
  },
  {
    title: "Regulatory Compliance",
    description: "Ensure statutory and regulatory compliance with ease.",
    icon: "⚖️",
  },
  {
    title: "Operational Efficiency",
    description: "Improve productivity and streamline operations.",
    icon: "🚀",
  },
];

const Audits = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    backgroundColor: "#d27147",
    border: "none",
    color: "#fff",
    padding: "7px 20px",
    borderRadius: "7px",
    fontWeight: "500",
    fontSize: "0.9rem",
    cursor: "pointer",
    transition: "0.3s",
  };

  return (
    <>
      {/* ================= FIRST VIEWPORT ================= */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)",
          paddingTop: "140px",
        }}
      >
        {/* HERO */}
        <Container className="text-center">
          <h1 className="fw-bold mb-3 text-white">Audit Services</h1>

          <p
            className="mb-4 text-white opacity-75"
            style={{ maxWidth: "720px", margin: "0 auto" }}
          >
            Conduct internal and external audits efficiently with expert
            guidance to strengthen governance and reduce risk.
          </p>

          {/* BUTTONS */}
          <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
            <button
              style={buttonStyle}
              onClick={() => navigate("/contact")}
            >
              Book a Demo
            </button>

            <button style={buttonStyle} onClick={() => navigate("/")}>
              Back to Home
            </button>
          </div>
        </Container>

        {/* ONLY ONE ROW OF AUDIT TYPES */}
        <Container style={{ flex: "1 1 auto" }}>
          <h2 className="text-center fw-bold mb-4 text-white">
            Types of Audits
          </h2>

          <Row className="justify-content-center gy-3">
            {auditTypes.map((audit, idx) => (
              <Col xs={12} sm={6} md={4} key={idx}>
                <Card
                  className="text-center p-3 shadow"
                  style={{
                    borderRadius: "16px",
                    background: "#ffffff",
                    color: "#013879",
                    minHeight: "165px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "10px" }}>
                    {audit.icon}
                  </div>

                  <h5 className="fw-bold" style={{ fontSize: "1rem" }}>
                    {audit.title}
                  </h5>

                  <p style={{ fontSize: "0.85rem", margin: 0 }}>
                    {audit.description}
                  </p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= BENEFITS SECTION (ON SCROLL) ================= */}
      <section
        style={{
          background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)",
        }}
      >
        <Container className="py-5">
          <h2 className="text-center fw-bold mb-5 text-white">
            Benefits
          </h2>

          <Row className="gy-4 justify-content-center">
            {benefits.map((benefit, idx) => (
              <Col xs={12} sm={6} md={4} key={idx}>
                <Card
                  className="text-center p-4 h-100 shadow"
                  style={{
                    borderRadius: "16px",
                    background: "#ffffff",
                    color: "#013879",
                  }}
                >
                  <div style={{ fontSize: "3rem", marginBottom: "15px" }}>
                    {benefit.icon}
                  </div>

                  <h5 className="fw-bold">{benefit.title}</h5>

                  <p style={{ margin: 0 }}>{benefit.description}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Audits;
