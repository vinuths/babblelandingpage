// src/pages/services/ComplianceMgmt.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const complianceServices = [
  {
    title: "Establishment Registration",
    description: "Register your establishment under applicable laws.",
    icon: "🏢",
  },
  {
    title: "License Management",
    description: "Maintain and renew all statutory licenses.",
    icon: "📄",
  },
  {
    title: "Policy Implementation",
    description: "Implement HR and workplace policies as per law.",
    icon: "🛠️",
  },
  {
    title: "Record Maintenance",
    description: "Keep all compliance records updated and accurate.",
    icon: "📂",
  },
];

const benefits = [
  {
    title: "Avoid Penalties",
    description: "Ensure full legal compliance to avoid fines.",
    icon: "⚖️",
  },
  {
    title: "Operational Efficiency",
    description: "Streamline compliance processes for efficiency.",
    icon: "📈",
  },
  {
    title: "Peace of Mind",
    description: "Focus on your business while compliance is managed.",
    icon: "🧘‍♂️",
  },
];

const ComplianceMgmt = () => {
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
          <h1 className="fw-bold mb-3 text-white">
            Establishment Compliances
          </h1>

          <p
            className="mb-4 text-white opacity-75"
            style={{ maxWidth: "720px", margin: "0 auto" }}
          >
            We manage all your establishment compliance requirements efficiently,
            ensuring your business adheres to statutory regulations.
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

        {/* ONLY ONE ROW VISIBLE */}
        <Container style={{ flex: "1 1 auto" }}>
          <h2 className="text-center fw-bold mb-4 text-white">
            Our Services
          </h2>

          <Row className="justify-content-center gy-3">
            {complianceServices.map((service, idx) => (
              <Col xs={12} sm={6} md={3} key={idx}>
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
                    {service.icon}
                  </div>

                  <h5 className="fw-bold" style={{ fontSize: "1rem" }}>
                    {service.title}
                  </h5>

                  <p style={{ fontSize: "0.85rem", margin: 0 }}>
                    {service.description}
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

export default ComplianceMgmt;
