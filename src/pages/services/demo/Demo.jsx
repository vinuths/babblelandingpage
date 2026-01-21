import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Demo = () => {
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
          <h1 className="fw-bold mb-3 text-white">Product Demo</h1>
          <p
            className="mb-4 text-white opacity-75"
            style={{ maxWidth: "700px", margin: "0 auto" }}
          >
            Watch how our platform simplifies compliance, payroll, and governance
            through automation and accuracy.
          </p>

          {/* ORANGE BUTTONS */}
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
            Book Demo
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

      {/* VIDEO SECTION */}
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
                background: "#ffffff", // white card like Audits page
              }}
            >
              <video width="100%" controls>
                <source
                  src="/VIDEO-2025-05-29-11-14-23.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Demo;
