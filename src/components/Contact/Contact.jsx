import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { HelpAndSupportMail } from "../../store/actions/otherActions";
import Particle from "../Particle";

function Contact() {
  const dispatch = useDispatch();

  // FORM STATE
  const [form, setForm] = useState({
    name: "",
    organization: "LANDING-PAGE-ENQUIRY",
    email: "",
    mobile: "",
    message: "",
  });

  // REDUX STATE
const contactState = useSelector((state) => state.helpSupportState) || {};
  const { loading_HELP_MAIL, success_HELP_MAIL, error } = contactState;

  // HANDLE INPUT CHANGE
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // HANDLE FORM SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(HelpAndSupportMail(form));
  };

  // RESET FORM AFTER SUCCESS
  useEffect(() => {
    if (success_HELP_MAIL) {
      setForm({
        name: "",
        organization: "LANDING-PAGE-ENQUIRY",
        email: "",
        mobile: "",
        message: "",
      });
    }
  }, [success_HELP_MAIL]);

  return (
    <>
      <Particle />

      <div style={{ position: "relative", zIndex: 2 }}>
        {/* WHATSAPP FLOATING BUTTON */}
        <a
          href="https://wa.me/9886599119?text=Hello%20Matrix%20HR%20Technologies,%20I%20would%20like%20to%20know%20more."
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
          <FaWhatsapp size={32} />
        </a>

        <Container fluid style={{ paddingBottom: "80px" }}>
          <Container>
            {/* HEADING */}
            <Row className="justify-content-center" style={{ paddingTop: "120px" }}>
              <Col md={8} className="text-center">
                <h1 style={{ color: "#fff", fontWeight: "700" }}>Contact Us</h1>
                <p style={{ color: "#fff", marginBottom: "40px" }}>
                  Let’s discuss how we can work together
                </p>
              </Col>
            </Row>

            {/* FORM + MAP */}
            <Row className="justify-content-center">
              {/* CONTACT FORM */}
              <Col md={6} style={{ marginBottom: "30px" }}>
                <Container
                  style={{
                    background: "#ffffff",
                    padding: "30px",
                    borderRadius: "12px",
                  }}
                >
                  <Form onSubmit={handleSubmit}>
                    {/* SUCCESS MESSAGE */}
                    {success_HELP_MAIL && (
                      <p style={{ color: "green", fontWeight: "600", marginBottom: "15px" }}>
                        ✅ Message submitted successfully!
                      </p>
                    )}

                    {/* ERROR MESSAGE */}
                    {error && (
                      <p style={{ color: "red", fontWeight: "600", marginBottom: "15px" }}>
                        ❌ {error}
                      </p>
                    )}

                    {/* NAME */}
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

                    {/* EMAIL */}
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

                    {/* PHONE */}
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="tel"
                        placeholder="Phone Number"
                        name="mobile"
                        value={form.mobile}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    {/* MESSAGE */}
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

                    {/* SUBMIT BUTTON */}
                    <button
                      type="submit"
                      disabled={loading_HELP_MAIL}
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "6px",
                        fontWeight: "500",
                        fontSize: "1rem",
                        color: "#fff",
                        backgroundColor: loading_HELP_MAIL ? "gray" : "#d27147",
                        border: "none",
                        cursor: loading_HELP_MAIL ? "not-allowed" : "pointer",
                        transition: "0.3s",
                      }}
                    >
                      {loading_HELP_MAIL ? "Sending..." : "Send Message"}
                    </button>
                  </Form>
                </Container>
              </Col>

              {/* MAP + ADDRESS */}
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
                      style={{
                        width: "100%",
                        height: "100%",
                        border: 0,
                        borderRadius: "12px",
                      }}
                      loading="lazy"
                    />
                  </div>

                  <div style={{ color: "#000" }}>
                    <h5 style={{ fontWeight: "bold" }}>Address</h5>
                    <p>
                      Matrix HR Technologies, 320, Matrix Square, 7th Main Rd,
                      BTM 2nd Stage, BTM Layout, Bengaluru, Karnataka 560076
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>

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
