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

      <Container
        fluid
        className="about-section"
        style={{
          paddingTop: "130px",
          paddingBottom: "70px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Container>
          {/* HERO */}
          <Row className="align-items-center mb-5">
            <Col md={4} className="text-center mb-3 mb-md-0">
              <img
                src={companyLogo}
                alt="Matrix HR Technologies Logo"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  animation: "logoFloat 4s ease-in-out infinite",
                  filter: "drop-shadow(0 8px 25px rgba(0,0,0,0.5))",
                  borderRadius: "12px",
                }}
              />
              <style>
                {`
                  @keyframes logoFloat {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                  }
                `}
              </style>
            </Col>

            <Col md={8} className="text-center text-md-start">
              <h1 className="fw-bold mb-3 text-white">
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

          {/* CONTENT */}
          <Row className="align-items-center">
            <Col md={7} className="mb-4">
              <div
                style={{
                  maxWidth: "95%",
                  textAlign: "justify",
                  textJustify: "inter-word",
                }}
              >
                <p style={{ color: "#ffffffcc" }}>
                  Matrix HR Technologies delivers smart, scalable HR solutions
                  designed to simplify workforce management and statutory
                  compliance through technology-driven processes.
                </p>

                <p style={{ color: "#ffffffcc" }}>
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
                style={{ maxHeight: "360px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default About;
