import React from "react";
import { useNavigate } from "react-router-dom";

const libraryItems = [
  { title: "Acts", path: "/services/elibrary/acts", icon: "📜" },
  { title: "Rules", path: "/services/elibrary/rules", icon: "📄" },
  { title: "Labour Forms", path: "/services/elibrary/labour-forms", icon: "🧾" },
  { title: "National Holidays", path: "/services/elibrary/holidays", icon: "📅" },
  { title: "Labour Welfare Fund", path: "/services/elibrary/labour-welfare", icon: "🏦" },
  { title: "Minimum Wages", path: "/services/elibrary/minimum-wages", icon: "💰" },
  { title: "Working Hours", path: "/services/elibrary/working-hours", icon: "⏰" },
  { title: "Professional Tax", path: "/services/elibrary/professional-tax", icon: "🧾" },
  { title: "Compliance Q&A", path: "/services/elibrary/compliance-qa", icon: "❓" },
  { title: "Policy Templates", path: "/services/elibrary/policy-templates", icon: "📂" },
  { title: "Legal Updates", path: "/services/elibrary/legal-updates", icon: "📰" },
  { title: "General", path: "/services/elibrary/general", icon: "📚" },
];

const ELibrary = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    backgroundColor: "#d27147",
    border: "1px solid #d27147",
    color: "#ffffff",
    fontWeight: 600,
    padding: "10px 20px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginRight: "10px",
    fontSize: "14px",
  };

  const buttonHover = (e) => {
    e.target.style.backgroundColor = "#c1603d";
    e.target.style.borderColor = "#c1603d";
  };

  const buttonLeave = (e) => {
    e.target.style.backgroundColor = "#d27147";
    e.target.style.borderColor = "#d27147";
  };

  const cardStyle = {
    borderRadius: "16px",
    background: "#ffffff",
    color: "#013879",
    cursor: "pointer",
    padding: "20px",
    textAlign: "center",
    transition: "all 0.3s ease",
    flex: "1 1 calc(33.333% - 20px)", // 3 cards per row with gaps
    maxWidth: "300px",
    boxSizing: "border-box",
  };

  const cardHover = (e) => {
    e.currentTarget.style.transform = "translateY(-6px)";
    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
  };

  const cardLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
  };

  return (
 <section
  style={{
    minHeight: "100vh",
    background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)",
    paddingTop: "100px", // adjust this based on your navbar height
    boxSizing: "border-box",
  }}
>

      {/* HERO SECTION */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ color: "#fff", fontWeight: "bold", marginBottom: "20px", fontSize: "36px" }}>
          E-Library
        </h1>
        <p style={{ color: "#fff", opacity: 0.85, maxWidth: "700px", margin: "0 auto 30px", fontSize: "16px" }}>
          Access all your HR compliance resources, templates, and training materials in one place.
        </p>

        <button
          style={buttonStyle}
          onMouseEnter={buttonHover}
          onMouseLeave={buttonLeave}
          onClick={() => navigate("/contact")}
        >
          Request Access
        </button>

        <button
          style={buttonStyle}
          onMouseEnter={buttonHover}
          onMouseLeave={buttonLeave}
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>

      {/* ELIBRARY ITEMS */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2 style={{ color: "#fff", fontWeight: "bold", marginBottom: "40px", fontSize: "28px" }}>Knowledge Hub</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {libraryItems.map((item, idx) => (
            <div
              key={idx}
              style={cardStyle}
              onClick={() => navigate(item.path)}
              onMouseEnter={cardHover}
              onMouseLeave={cardLeave}
            >
              <div style={{ fontSize: "3rem", marginBottom: "15px" }}>{item.icon}</div>
              <h5 style={{ fontWeight: "bold", fontSize: "18px" }}>{item.title}</h5>
            </div>
          ))}
        </div>
      </div>

      {/* DISCLAIMER SCROLL */}
      <div
        style={{
          width: "100%",
          height: "52px",
          overflow: "hidden",
          background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)",
          display: "flex",
          alignItems: "center",
          borderTop: "1px solid rgba(255,255,255,0.3)",
        }}
      >
        <p
          style={{
            whiteSpace: "nowrap",
            paddingLeft: "100%",
            animation: "scrollText 35s linear infinite",
            fontSize: "9.5px",
            color: "#ffffff",
            letterSpacing: "0.4px",
            margin: 0,
          }}
        >
          <strong>Disclaimer:</strong> The content published on this website is provided by{" "}
          <strong>Matrix HR Technologies Pvt. Ltd.</strong> for informational purposes only.
        </p>
      </div>

      <style>
        {`
          @keyframes scrollText {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </section>
  );
};

export default ELibrary;
