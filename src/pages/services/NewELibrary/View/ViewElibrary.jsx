import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

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

  /* BUTTON STYLE */
  const buttonStyle = {
    backgroundColor: "#d27147",
    border: "1px solid #d27147",
    color: "#ffffff",
    fontWeight: 600,
    padding: "10px 20px",
    cursor: "pointer",
    marginRight: "10px",
    fontSize: "14px",
    borderRadius: "6px",
    transition: "0.3s",
  };

  const buttonHover = (e) => {
    e.target.style.backgroundColor = "#c1603d";
  };

  const buttonLeave = (e) => {
    e.target.style.backgroundColor = "#d27147";
  };

  /* ✅ BIGGER CARD STYLE */
  const cardStyle = {
    borderRadius: "16px",
    background: "#ffffff",
    color: "#013879",
    cursor: "pointer",

    /* ✅ Bigger card size */
    padding: "22px",
    minHeight: "140px",

    /* ✅ Perfect 3 cards per row */
    flex: "1 1 calc(33.333% - 25px)",
    maxWidth: "300px",

    textAlign: "center",
    boxSizing: "border-box",
    transition: "0.3s",
  };

  const cardHover = (e) => {
    e.currentTarget.style.transform = "translateY(-6px)";
    e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.25)";
  };

  const cardLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <>
      <Helmet>
        <title>Compliance E-Library | Labour Law Forms | Matrix HR Tech</title>

        <meta
          name="description"
          content="Access compliance e-library with labour law forms, acts, rules and compliance documents for HR professionals."
        />

        <meta
          name="keywords"
          content="compliance elibrary, labour law forms, compliance forms India, HR compliance documents"
        />

        <link rel="canonical" href="https://matrixhrtech.com/elibrary" />
      </Helmet>

      <section
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)",
          paddingTop: "100px",
          paddingBottom: "60px",
          boxSizing: "border-box",
        }}
      >
        {/* HERO SECTION */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1
            style={{
              color: "#fff",
              fontWeight: "bold",
              marginBottom: "15px",
              fontSize: "34px",
            }}
          >
            E-Library
          </h1>

          <p
            style={{
              color: "#fff",
              opacity: 0.85,
              maxWidth: "700px",
              margin: "0 auto 25px",
              fontSize: "15px",
            }}
          >
            Access all your HR compliance resources, templates, and training
            materials in one place.
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

        {/* ✅ ELIBRARY ITEMS (2 ROWS FIT FIRST VIEW) */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",

              /* ✅ More spacing between cards */
              gap: "25px",

              /* ✅ Controls row fit */
              maxWidth: "1050px",

              margin: "0 auto",
            }}
          >
            {libraryItems.map((item, idx) => (
              <div
                key={idx}
                style={cardStyle}
                onClick={() => {
                  if (item.title === "Labour Forms" || item.title === "General") {
                    navigate("/contact");
                  } else {
                    navigate(item.path);
                  }
                }}
                onMouseEnter={cardHover}
                onMouseLeave={cardLeave}
              >
                {/* ICON */}
                <div style={{ fontSize: "2.8rem", marginBottom: "12px" }}>
                  {item.icon}
                </div>

                {/* TITLE */}
                <h5 style={{ fontWeight: "bold", fontSize: "18px", margin: 0 }}>
                  {item.title}
                </h5>
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
            display: "flex",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.3)",
            marginTop: "30px",
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
            <strong>Disclaimer:</strong> The content published on this website is
            provided by <strong>Matrix HR Technologies Pvt. Ltd.</strong> for
            informational purposes only.
          </p>
        </div>

        {/* SCROLL ANIMATION */}
        <style>
          {`
          @keyframes scrollText {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
        `}
        </style>
      </section>
    </>
  );
};

export default ELibrary;
