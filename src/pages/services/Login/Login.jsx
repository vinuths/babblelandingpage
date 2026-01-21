import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("executive");
  const [hoverContinue, setHoverContinue] = useState(false);

  // Centralized routes
  const roleRoutes = {
    executive: "https://executive.matrixhrtech.com/",
    auditor: "https://auditor.matrixhrtech.com/",
    company: "https://client.matrixhrtech.com/",
  };

  const handleContinue = () => {
    const destination = roleRoutes[activeTab];
    if (destination.startsWith("http")) {
      window.location.href = destination;
    } else {
      navigate(destination);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)",
        backgroundImage: "-moz-linear-gradient(-45deg, #013879 0%, #CCEBFD 100%)",
        backgroundImageWebkit: "-webkit-linear-gradient(-45deg, #013879 0%, #CCEBFD 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "80px",
      }}
    >
      <Container style={{ maxWidth: "520px" }}>
        <Card
          style={{
            background: "#ffffff", // White card
            borderRadius: "12px",
            border: "1px solid rgba(0,0,0,0.05)",
            boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
            color: "#333",
            padding: "30px",
          }}
        >
          {/* Title */}
          <div className="text-center mb-4">
            <h3 style={{ fontWeight: 700, color: "#333" }}>Login Portal</h3>
            <p style={{ color: "#666", fontSize: "14px" }}>
              Select your role to continue
            </p>
          </div>

          {/* Role Tabs */}
          <Nav
            variant="pills"
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            className="justify-content-center gap-2 mb-4"
          >
            {[
              { key: "executive", label: "Executive" },
              { key: "auditor", label: "Auditor" },
              { key: "company", label: "Company" },
            ].map((role) => (
              <Nav.Item key={role.key}>
                <Nav.Link
                  eventKey={role.key}
                  style={{
                    borderRadius: "6px",
                    padding: "8px 18px",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: activeTab === role.key ? "#fff" : "#333",
                    background:
                      activeTab === role.key
                        ? "linear-gradient(135deg, #d27147, #b55b36)" // Orange gradient like Contact
                        : "rgba(0,0,0,0.05)",
                    border:
                      activeTab === role.key
                        ? "none"
                        : "1px solid rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {role.label}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>

          {/* Selected role */}
          <div className="text-center mb-3">
            <p style={{ fontSize: "14px", color: "#333", opacity: 0.75 }}>
              Selected role:
              <span style={{ fontWeight: 600, color: "#b55b36" }}>
                {" "}{activeTab}
              </span>
            </p>
          </div>

          {/* Continue Button */}
          <Button
            onClick={handleContinue}
            onMouseEnter={() => setHoverContinue(true)}
            onMouseLeave={() => setHoverContinue(false)}
            style={{
              width: "100%",
              padding: "12px 0",
              borderRadius: "6px",
              fontWeight: 500,
              fontSize: "1rem",
              color: "#fff",
              background: hoverContinue
                ? "linear-gradient(135deg, #b55b36, #d27147)"
                : "linear-gradient(135deg, #d27147, #b55b36)",
              border: "none",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Continue →
          </Button>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
