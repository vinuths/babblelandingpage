import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from "../../Assets/about.png";
import companyLogo from "../../Assets/Logo11.png";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <>
      <Particle />

      {/* HERO SECTION */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)",
          position: "relative",
          zIndex: 2,
          overflow: "hidden",
          paddingTop: "60px", // default spacing from top
          paddingBottom: "60px",
        }}
      >
        <Container className="h-100 d-flex flex-column justify-content-center">
          {/* HERO ROW */}
          <Row className="align-items-center flex-column flex-md-row h-100">
            {/* Logo */}
            <Col
              md={4}
              className="text-center mb-3 mb-md-0 d-flex justify-content-center"
            >
              <img
                src={companyLogo}
                alt="Matrix HR Technologies Logo"
                style={{
                  maxWidth: "220px",
                  height: "auto",
                  animation: "logoFloat 4s ease-in-out infinite",
                  filter: "drop-shadow(0 8px 25px rgba(0,0,0,0.5))",
                  borderRadius: "12px",
                }}
              />
            </Col>

            {/* Hero Text */}
            <Col md={8} className="text-center text-md-start">
              <h1
                className="fw-bold mb-3 text-white"
                style={{ lineHeight: "1.2" }}
              >
                Matrix HR Technologies
              </h1>

              <p
                className="fs-5 mb-3"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                Empowering HR through Technology and Compliance Excellence.
              </p>

              <Button
                onClick={() => navigate("/contact")}
                style={{
                  background:
                    "linear-gradient(135deg, #d27147 0%, #f4a261 100%)",
                  border: "none",
                  color: "#ffffff",
                  fontWeight: "600",
                  padding: "10px 25px",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                }}
              >
                Book a Demo
              </Button>
            </Col>
          </Row>

          {/* CONTENT + LAPTOP IMAGE */}
          <Row
            className="align-items-center flex-column-reverse flex-md-row mt-4"
            style={{ flex: 1 }}
          >
            <Col
              md={7}
              className="d-flex align-items-center"
              style={{ textAlign: "justify", textJustify: "inter-word" }}
            >
              <div style={{ width: "100%" }}>
                <p style={{ color: "#ffffffcc", marginBottom: "1.2rem" }}>
                  Matrix HR Technologies delivers smart, scalable HR solutions
                  designed to simplify workforce management and statutory
                  compliance through technology-driven processes.
                </p>

                <p style={{ color: "#ffffffcc", marginBottom: "1.2rem" }}>
                  Our platform supports payroll, labour compliance, HR
                  automation, and policy management—helping organizations reduce
                  risk, improve efficiency, and focus on strategic growth.
                </p>
              </div>
            </Col>

            <Col md={5} className="text-center">
              <img
                src={laptopImg}
                alt="About Matrix HR Technologies"
                className="img-fluid"
                style={{
                  maxHeight: "360px",
                  borderRadius: "12px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                }}
              />
            </Col>
          </Row>
        </Container>

        {/* FLOATING ANIMATION */}
        <style>
          {`
            @keyframes logoFloat {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
              100% { transform: translateY(0px); }
            }

            /* ===== MEDIA QUERY FIXES ===== */

            /* Small laptops (1366px) */
            @media (max-width: 1366px) {
              section {
                padding-top: 60px !important;
                padding-bottom: 60px !important;
              }

              img[alt="Matrix HR Technologies Logo"] {
                max-width: 180px !important;
              }

              h1.fw-bold {
                font-size: 2.6rem !important;
              }

              p.fs-5 {
                font-size: 1rem !important;
              }
            }

            /* Tablets */
            @media (max-width: 992px) {
              section {
                padding-top: 50px !important;
                padding-bottom: 50px !important;
              }

              h1.fw-bold {
                font-size: 2.2rem !important;
              }

              p.fs-5 {
                font-size: 0.95rem !important;
              }

              img[alt="Matrix HR Technologies Logo"] {
                max-width: 160px !important;
              }
            }

            /* Mobile */
            @media (max-width: 576px) {
              section {
                padding-top: 40px !important;
                padding-bottom: 40px !important;
              }

              h1.fw-bold {
                font-size: 1.8rem !important;
              }

              p.fs-5 {
                font-size: 0.9rem !important;
              }

              img[alt="Matrix HR Technologies Logo"] {
                max-width: 140px !important;
              }
            }
          `}
        </style>
      </section>
    </>
  );
}

export default About;
