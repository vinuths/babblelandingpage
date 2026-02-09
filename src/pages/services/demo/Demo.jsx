import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Demo = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)",
        display: "flex",
        alignItems: "center",
        paddingTop: "120px", // keeps header spacing
        paddingBottom: "40px",
      }}
    >
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={11} lg={10} xl={9}>
            <div
              style={{
                width: "100%",
                height: "75vh", // 🔥 BIG video area
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 25px 60px rgba(0,0,0,0.4)",
                background: "#000",
              }}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/y7xKdtL18GQ?rel=0"
                title="Product Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ display: "block" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Demo;
