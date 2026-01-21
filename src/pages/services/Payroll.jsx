// src/pages/services/Payroll.jsx
import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const payrollFeatures = [
  { title: "Payroll Processing", description: "Accurate and timely monthly payroll execution.", icon: "💼" },
  { title: "Salary Structuring & Compliance", description: "Optimized salary structures aligned with statutory norms.", icon: "⚖️" },
  { title: "Statutory Deductions", description: "Automated PF, ESI, PT, LWF and tax deductions.", icon: "🧾" },
  { title: "Payroll Inputs Management", description: "Attendance, leave, incentives, and variable pay processing.", icon: "📊" },
  { title: "Payslips & Reports", description: "Digitally generated payslips and payroll MIS.", icon: "📄" },
  { title: "Tax Computation & TDS", description: "Income tax calculation and TDS compliance.", icon: "💰" },
  { title: "Final Settlement (F&F)", description: "Accurate exit settlements with statutory compliance.", icon: "✅" },
  { title: "Arrears & Adjustments", description: "Seamless handling of revisions and retro calculations.", icon: "🔄" },
  { title: "Compliance Integration", description: "Payroll aligned with labour law and statutory requirements.", icon: "📌" },
  { title: "Data Security & Confidentiality", description: "Secure payroll processing with controlled access.", icon: "🔒" },
];

const Payroll = () => {
  const navigate = useNavigate();
  const [hoverDemo, setHoverDemo] = useState(false);
  const [hoverHome, setHoverHome] = useState(false);

  return (
    <section style={{ background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)", minHeight: "100vh" }}>
      {/* HERO SECTION */}
      <Container fluid className="py-5" style={{ background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
        <Container className="text-center py-5">
          <h1 className="fw-bold mb-3 text-white">Payroll Administration</h1>
          <p className="mb-4 text-white opacity-75" style={{ maxWidth: "700px", margin: "0 auto" }}>
            Simplify payroll processing with automation, compliance, and detailed reporting.
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
          {payrollFeatures.map((feature, idx) => (
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

export default Payroll;
