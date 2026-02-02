import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Demo = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    backgroundColor: "#d27147",
    border: "none",
    color: "#fff",
    padding: "8px 22px",
    fontWeight: "600",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "0.3s",
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)",
        display: "flex",
        flexDirection: "column",
        paddingTop: "140px", // ✅ same spacing like all pages
      }}
    >
      {/* HERO CONTENT */}
      <Container className="text-center">
        <h1 className="fw-bold mb-3 text-white">
          Product Demo
        </h1>

        <p
          className="text-white opacity-75 mb-4"
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            fontSize: "15px",
            lineHeight: "1.5",
          }}
        >
          Watch how our platform simplifies compliance, payroll, and governance
          through automation and accuracy.
        </p>

        {/* BUTTONS */}
        <div className="d-flex justify-content-center gap-3 flex-wrap mb-4">
          <button
            style={buttonStyle}
            onClick={() => navigate("/contact")}
          >
            Book Demo
          </button>

          <button style={buttonStyle} onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </Container>

      {/* VIDEO SECTION (PERFECT IN FIRST VIEWPORT) */}
      <Container style={{ flex: "1 1 auto" }}>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div
              style={{
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 18px 45px rgba(0,0,0,0.35)",
                background: "#fff",
                height: "320px", // ✅ bigger + fits perfectly
              }}
            >
              <video
                width="100%"
                height="100%"
                style={{
                  objectFit: "cover", // ✅ full clean fit
                  display: "block",
                }}
                controls
              >
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
