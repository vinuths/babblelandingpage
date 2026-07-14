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
    website: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

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
        website: "",
      });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  }, [success_HELP_MAIL]);

  return (
    <>
      <Particle />

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

      {/* FULL HEIGHT SECTION */}
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Container fluid style={{ padding: 0, height: "100%" }}>
          <Container style={{ height: "100%" }}>
            {/* HEADING */}
            <Row
              className="justify-content-center"
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
            >
              <Col md={8} className="text-center">
                <h1 style={{ color: "#fff", fontWeight: "700" }}>Contact Us</h1>
                <p style={{ color: "#fff", marginBottom: "0" }}>
                  Let’s discuss how we can work together
                </p>
              </Col>
            </Row>

            {/* FORM + MAP SIDE BY SIDE */}
            <Row
              className="justify-content-center"
              style={{
                alignItems: "stretch",
                height: "calc(100% - 80px)", // remaining height after heading
              }}
            >
              {/* CONTACT FORM */}
              <Col
                md={6}
                style={{
                  marginBottom: "0",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    background: "#ffffff",
                    padding: "20px",
                    borderRadius: "12px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Form style={{ flex: 1 }} onSubmit={handleSubmit}>
                    {showSuccess && (
                      <p
                        style={{
                          color: "green",
                          fontWeight: "600",
                          marginBottom: "10px",
                        }}
                      >
                        ✅ Message submitted successfully!
                      </p>
                    )}
                    {error && (
                      <p
                        style={{
                          color: "red",
                          fontWeight: "600",
                          marginBottom: "10px",
                        }}
                      >
                        ❌ {error}
                      </p>
                    )}

                    <Form.Group className="mb-2">
                      <Form.Control
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-2">
                      <Form.Control
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-2">
                      <Form.Control
                        type="tel"
                        placeholder="Phone Number"
                        name="mobile"
                        value={form.mobile}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group className="mb-2" style={{ flex: 1 }}>
                      <Form.Control
                        as="textarea"
                        placeholder="Your Message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        style={{ height: "100%", resize: "none" }}
                      />
                    </Form.Group>
                    <div
                      style={{
                        position: "absolute",
                        left: "-9999px",
                        opacity: 0,
                        pointerEvents: "none",
                      }}
                      aria-hidden="true"
                    >
                      <Form.Control
                        type="text"
                        name="website"
                        autoComplete="off"
                        tabIndex="-1"
                        value={form.website}
                        onChange={handleChange}
                      />
                    </div>

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
                </div>
              </Col>

              {/* MAP */}
              {/* MAP */}
              <Col
                md={6}
                style={{
                  marginBottom: "0",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    overflow: "hidden",
                    background: "#f0f0f0", // shows instantly before iframe loads
                    display: "flex",
                    flex: 1, // matches the height of the form
                  }}
                >
                  <iframe
                    title="Matrix HR Technologies Location"
                    src="https://www.google.com/maps?q=Matrix%20HR%20Technologies%20Bangalore&output=embed"
                    style={{
                      width: "100%",
                      height: "100%",
                      border: 0,
                    }}
                    loading="lazy"
                  />
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
