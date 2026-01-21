import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Particle from "../Particle";
// import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting Matrix HR Technologies!");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const [hoverSend, setHoverSend] = useState(false);

  return (
    <>
      {/* ===== PARTICLE BACKGROUND ===== */}
      <Particle />

      {/* ===== PAGE CONTENT ===== */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {/* ===== WHATSAPP FLOATING BUTTON ===== */}
        <a
          href="https://wa.me/919999999999?text=Hello%20Matrix%20HR%20Technologies,%20I%20would%20like%20to%20know%20more."
          target="_blank"
          rel="noreferrer"
          style={{
            position: "fixed",
            bottom: "25px",
            right: "25px",
            width: "60px",
            height: "60px",
            backgroundColor: "#25D366",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 0 rgba(37, 211, 102, 0.6)",
            animation: "pulse 2s infinite",
            zIndex: 9999,
            color: "#fff",
            textDecoration: "none",
          }}
        >
          {/* <FaWhatsapp size={32} /> */}
        </a>

        <Container fluid style={{ paddingBottom: "80px" }}>
          <Container>
            {/* Heading */}
            <Row className="justify-content-center" style={{ paddingTop: "120px" }}>
              <Col md={8} className="text-center">
                <h1 style={{ color: "#fff", fontWeight: "700" }}>Contact Us</h1>
                <p style={{ color: "#fff", marginBottom: "40px" }}>
                  Let’s discuss how we can work together
                </p>
              </Col>
            </Row>

            {/* Form & Map Side by Side */}
            <Row className="justify-content-center">
              {/* Contact Form */}
              <Col md={6} style={{ marginBottom: "30px" }}>
                <Container style={{ background: "#ffffff", padding: "30px", borderRadius: "12px" }}>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Phone Number"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Control
                        as="textarea"
                        rows={6}
                        placeholder="Your Message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <button
                      type="submit"
                      onMouseEnter={() => setHoverSend(true)}
                      onMouseLeave={() => setHoverSend(false)}
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "6px",
                        fontWeight: "500",
                        fontSize: "1rem",
                        color: "#fff",
                        backgroundColor: hoverSend ? "#b55b36" : "#d27147",
                        border: "none",
                        cursor: "pointer",
                        transition: "0.3s",
                      }}
                    >
                      Send Message
                    </button>
                  </Form>
                </Container>
              </Col>

              {/* Map & Address */}
              <Col md={6} style={{ marginBottom: "30px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    minHeight: "650px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    background: "#f8f9fa",
                    padding: "15px",
                  }}
                >
                  <div style={{ flex: 1, marginBottom: "15px" }}>
                    <iframe
                      title="Matrix HR Technologies Location"
                      src="https://www.google.com/maps?q=Matrix%20HR%20Technologies%20Bangalore&output=embed"
                      style={{ width: "100%", height: "100%", border: 0, borderRadius: "12px" }}
                      loading="lazy"
                    />
                  </div>

                  <div style={{ color: "#000" }}>
                    <h5 style={{ fontWeight: "bold" }}>Address</h5>
                    <p>
                      Matrix HR Technologies, 320, Matrix Square, 7th Main Rd, BTM 2nd Stage, BTM Layout,
                      Bengaluru, Karnataka 560076
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>

      {/* PULSE ANIMATION */}
      <style>
        {`
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6); }
            70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
            100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
          }
        `}
      </style>
    </>
  );
}

export default Contact;
