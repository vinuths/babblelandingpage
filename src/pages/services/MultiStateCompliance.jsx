// src/pages/services/MultiStateCompliance.jsx
import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const multiStateFeatures = [
  { title: "State-Wise Registration", description: "Ensure proper registrations across all operating states", icon: "🗺️" },
  { title: "Statutory Filings", description: "Handle all state-specific returns and filings seamlessly", icon: "⚖️" },
  { title: "Centralized Dashboard", description: "Monitor multi-state compliance in one unified view", icon: "📊" },
  { title: "Compliance Alerts", description: "Automated notifications for deadlines and renewals", icon: "🔔" },
];

const benefits = [
  { title: "Audit Readiness", description: "Maintain inspection-ready records across all locations", icon: "✔️" },
  { title: "Document Management", description: "Organize and manage state-specific documents efficiently", icon: "📄" },
  { title: "Performance Insights", description: "Track compliance efficiency and risk metrics", icon: "📈" },
];

const MultiStateCompliance = () => {
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
      {/* FIRST VIEWPORT */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)",
        }}
      >
        {/* HERO SECTION (Heading pushed down) */}
        <Container
          className="text-center"
          style={{
            paddingTop: "150px", // ✅ heading stays lower
          }}
        >
          <h1 className="fw-bold mb-3 text-white">
            Multi-State Compliance
          </h1>

          <p
            className="mb-4 text-white opacity-75"
            style={{
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Manage complex, location-specific compliance requirements effortlessly.
          </p>

          {/* BUTTONS */}
          <div className="d-flex justify-content-center flex-wrap gap-3 mb-3">
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

        {/* FIRST ROW OF CARDS */}
        <Container className="py-3" style={{ flex: "1 1 auto" }}>
          <h2 className="text-center fw-bold mb-4 text-white">
            Key Features
          </h2>

          <Row className="gy-3 justify-content-center">
            {multiStateFeatures.map((feature, idx) => (
              <Col xs={12} sm={6} md={3} key={idx}>
                <Card
                  className="text-center p-3 h-100 shadow"
                  style={{
                    borderRadius: "16px",
                    background: "#ffffff",
                    color: "#013879",
                    minHeight: "150px",
                    maxHeight: "160px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "8px" }}>
                    {feature.icon}
                  </div>

                  <h5
                    className="fw-bold"
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: "1.2",
                      marginBottom: "6px",
                    }}
                  >
                    {feature.title}
                  </h5>

                  <p style={{ fontSize: "0.8rem", margin: 0 }}>
                    {feature.description}
                  </p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* BENEFITS SECTION (Scroll Down) */}
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
                  <p>{benefit.description}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MultiStateCompliance;
