import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const riskFeatures = [
  {
    title: "Corporate Governance Framework",
    description:
      "Establish strong governance structures aligned with regulatory and ethical standards",
    icon: "🏛️",
  },
  {
    title: "Risk Identification",
    description:
      "Identify operational, financial, legal, and compliance risks proactively",
    icon: "🔎",
  },
  {
    title: "Risk Assessment & Analysis",
    description:
      "Evaluate risk impact and likelihood to prioritize mitigation strategies",
    icon: "📊",
  },
];

const benefits = [
  {
    title: "Policy & Controls Design",
    description:
      "Develop SOPs and internal controls to reduce business exposure",
    icon: "📘",
  },
  {
    title: "Compliance Risk Monitoring",
    description:
      "Continuous monitoring to ensure adherence to statutory requirements",
    icon: "🛡️",
  },
  {
    title: "Management Reporting",
    description:
      "Clear dashboards and reports for leadership decision-making",
    icon: "📈",
  },
];

const RiskManagement = () => {
  const navigate = useNavigate();

  const [hoverDemo, setHoverDemo] = useState(false);
  const [hoverHome, setHoverHome] = useState(false);

  const buttonStyle = (hover) => ({
    backgroundColor: hover ? "#b55b36" : "#d27147",
    border: "none",
    color: "#fff",
    padding: "6px 18px",
    borderRadius: "6px",
    fontWeight: "500",
    fontSize: "0.9rem",
    cursor: "pointer",
    transition: "0.3s",
  });

  return (
    <>
      {/* ================= FIRST VIEWPORT ================= */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)",
          paddingTop: "140px", // ✅ heading stays down
        }}
      >
        {/* HERO */}
        <Container className="text-center">
          <h1 className="fw-bold mb-3 text-white">
            Governance & Risk Management
          </h1>

          <p
            className="mb-4 text-white opacity-75"
            style={{ maxWidth: "720px", margin: "0 auto" }}
          >
            Strengthen corporate governance and proactively manage risks to
            protect your business and ensure long-term sustainability.
          </p>

          {/* BUTTONS */}
          <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
            <button
              onClick={() => navigate("/contact")}
              onMouseEnter={() => setHoverDemo(true)}
              onMouseLeave={() => setHoverDemo(false)}
              style={buttonStyle(hoverDemo)}
            >
              Book a Demo
            </button>

            <button
              onClick={() => navigate("/")}
              onMouseEnter={() => setHoverHome(true)}
              onMouseLeave={() => setHoverHome(false)}
              style={buttonStyle(hoverHome)}
            >
              Back to Home
            </button>
          </div>
        </Container>

        {/* ONE ROW VISIBLE */}
        <Container style={{ flex: "1 1 auto" }}>
          <h2 className="text-center fw-bold mb-4 text-white">
            Key Features
          </h2>

          <Row className="justify-content-center gy-3">
            {riskFeatures.map((feature, idx) => (
              <Col xs={12} sm={6} md={4} key={idx}>
                <Card
                  className="text-center p-3 shadow"
                  style={{
                    borderRadius: "16px",
                    background: "#ffffff",
                    color: "#013879",
                    minHeight: "160px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "10px" }}>
                    {feature.icon}
                  </div>

                  <h5 className="fw-bold" style={{ fontSize: "1rem" }}>
                    {feature.title}
                  </h5>

                  <p style={{ fontSize: "0.85rem", margin: 0 }}>
                    {feature.description}
                  </p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= BENEFITS SECTION (SCROLL) ================= */}
      <section
        style={{
          background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)",
        }}
      >
        <Container className="py-5">
          <h2 className="text-center fw-bold mb-5 text-white">
            Additional Benefits
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

export default RiskManagement;
