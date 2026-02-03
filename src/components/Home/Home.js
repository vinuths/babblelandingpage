import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import homeLogo from "../../Assets/dashboard1.png";
import { Link } from "react-router-dom";
import Partners from "../Partners/Partners";
import HomeAchievements from "./HomeAchievements";
import Logo1 from "../../Assets/Logo1.png"; // Adjust relative path from the component file
import serviceimage1 from "../../Assets/20944573.jpg"; // Adjust relative path from the component file
import serviceimage2 from "../../Assets/19728.jpg"; // Adjust relative path from the component file
import serviceimage3 from "../../Assets/19197135.jpg"; // Adjust relative path from the component file
import ComplianceChatbot from "../ComplianceChatbot";
import Carousel from "react-bootstrap/Carousel";
import Cloud from "../../Assets/favicon.png"; 
import compliancecalender from "../../Assets/compliancecalender .png"; // Adjust relative path from the component file
import complianceoverview from "../../Assets/complianceoverview.png"; // Adjust relative path from the component file
import registrationlicenses from "../../Assets/registrationlicenses.png"; // Adjust relative path from the component file
import PFtracker from "../../Assets/PFtracker.png"; // Adjust relative path from the component file

const heroTexts = [
  {
    title: "Compliance Made Easy.",
    text: "Real-Time Insights",
    desc:
      "Manage audits, track compliance, and generate real-time reports with a powerful centralized compliance platform.",
  },
  {
    title: "Automate Statutory Compliance",
    text: "Never Miss a Deadline",
    desc:
      "Automated alerts, reminders, and filings ensure your organization stays compliant across all states and acts.",
  },
  {
    title: "One Platform, Total Control",
    text: "Multi-State Compliance",
    desc:
      "Manage complex multi-state and multi-location compliance requirements with centralized governance and reporting.",
  },
  {
    title: "End-to-End Labour Law Compliance",
    text: "Acts. Rules. Registers.",
    desc:
      "Manage PF, ESI, CLRA, Factory Act, payroll, and multi-state compliances through a single statutory governance platform.",
  },
  // ✅ NEW SLIDE 5
  {
    title: "Audit & Risk Management",
    text: "Identify Risks Early",
    desc:
      "Stay ahead with comprehensive audit tracking, risk heatmaps, and executive dashboards to mitigate compliance risks.",
  },
  // ✅ NEW SLIDE 6
  {
    title: "Digital Statutory Registers",
    text: "Easy Record-Keeping",
    desc:
      "Maintain all statutory registers digitally with automatic updates, notifications, and compliance tracking.",
  },
  // ✅ NEW SLIDE 7
  {
    title: "Vendor & Contractor Compliance",
    text: "Streamline Vendor Audits",
    desc:
      "Ensure all contractors and vendors adhere to your compliance standards with automated checks and reports.",
  },
  // ✅ NEW SLIDE 8
  {
    title: "Statutory Returns Simplified",
    text: "Filing Made Easy",
    desc:
      "Never miss deadlines with automated tracking of statutory returns and filing schedules across states.",
  },
  // ✅ NEW SLIDE 9
  {
    title: "Multi Branch Compliance Tracking",
    text: "All branches, one compliance view",
    desc:
      "Automated Branch Compliance Tracking for Licenses,Displays,Registers,Inspection And Notices",
  },
  // ✅ NEW SLIDE 10
  {
    title: "Trustworthy Compliance Insights",
    text: "Data-Driven Decisions",
    desc:
      "Leverage real-time dashboards and reports to make informed decisions and ensure 100% compliance.",
  },
  // ✅ NEW SLIDE 11
  {
    title: "Risk-Free Operations",
    text: "Minimize Compliance Risks",
    desc:
      "Identify gaps, monitor audits, and implement corrective measures before issues escalate.",
  },
];


const scrollServices = [
  {
    title: "Establishment Compliances",
    desc: "Manage all establishment-level statutory compliances in one place.",
    image: serviceimage1,
    path: "/services/compliance-mgmt",
  },
  {
    title: "Payroll Administration",
    desc: "Automated payroll with complete statutory compliance.",
    image: serviceimage2,
    path: "/services/payroll",
  },
  {
    title: "Factory Compliances",
    desc: "End-to-end factory act compliance and license management.",
    image: serviceimage3,
    path: "/services/factory-license",
  },
  {
    title: "CLRA Compliances",
    desc: "Complete contract labour compliance tracking.",
    image: serviceimage1,
    path: "/services/clra",
  },
  {
    title: "Audit Management",
    desc: "Plan, execute, and close audits efficiently.",
    image: serviceimage2,
    path: "/services/audits",
  },
  {
    title: "Register Management",
    desc: "Digital statutory registers with auto updates.",
    image: serviceimage3,
    path: "/services/hr-shared-services",
  },
  {
    title: "Statutory Returns & Filings",
    desc: "Never miss a filing deadline again.",
    image: serviceimage1,
    path: "/services/statutory-returns",
  },
  {
    title: "Social Security Compliance",
    desc: "PF, ESI & PT compliance made simple.",
    image: serviceimage2,
    path: "/services/social-security",
  },
  {
    title: "Contractor & Vendor Compliance",
    desc: "Vendor onboarding & compliance scorecards.",
    image: serviceimage3,
    path: "/services/vendor-compliance",
  },
  {
    title: "Multi-State Compliance",
    desc: "State-wise compliance with central monitoring.",
    image: serviceimage1,
    path: "/services/multi-state-compliance",
  },
  {
    title: "Compliance Tracking & Alerts",
    desc: "Real-time alerts & escalation workflows.",
    image: serviceimage2,
    path: "/services/compliance-tracking",
  },
  {
    title: "Governance & Risk Management",
    desc: "Risk heatmaps & executive dashboards.",
    image: serviceimage3,
    path: "/services/risk-management",
  },
];

function Home() {

  // Refs for full-page sections


  const [servicePage, setServicePage] = useState(0);
  const scrollableServices = scrollServices.slice(0, 8); // Only first 8 for scrolling
  const totalPages = Math.ceil(scrollableServices.length / 2);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
const isScrollingRef = useRef(false);
const snapTimeoutRef = useRef(null);

const heroImages = [
  homeLogo,
  compliancecalender,
  complianceoverview,
  registrationlicenses,
  PFtracker,
];

const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  }, 5000); // 3 seconds

  return () => clearInterval(interval);
}, []);

  // AUTO-HERO SLIDE ROTATION
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroTexts.length);
    }, 5000); // change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";
  }, []);
  // Loader timeout
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const currentHero = heroTexts[currentIndex];

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffffff",
        }}                
      > 
        <div
          id="preloader"
          style={{
            width: "150px",
            height: "150px",
            backgroundImage: `url(${Logo1})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            animation: "spinScale 1.5s linear infinite",
          }}
        ></div>

        <style>{`
          @keyframes spinScale {
            0% { transform: rotate(0deg) scale(0.9); opacity: 0.7; }
            50% { transform: rotate(180deg) scale(1.1); opacity: 1; }
            100% { transform: rotate(360deg) scale(0.9); opacity: 0.7; }
          }
        `}</style>
      </div>
    );
  }

  return (
    
<section style={{ position: "relative", width: "100%" }}>

      {/* <Particle /> */}
      {/* Particle background removed to match HTML white design */}

      {/* ========== HERO ========== */}
    {/* ========== HERO ========== */}
{/* ========== HERO SECTION ========== */}
{/* ========== HERO SECTION ========== */}
<section
  style={{
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#ffffff",
    display: "flex",
    alignItems: "center",
    paddingTop: "110px",
    paddingBottom: "60px",
  }}
>
  <Container>
    <Row className="align-items-center">

      {/* LEFT CONTENT */}
      <Col md={7} style={{ marginBottom: "40px" }}>

        {/* ===== MATRIX HR BRAND BLOCK ===== */}
        <div
          style={{
            position: "relative",
            display: "inline-block",
            marginBottom: "30px",
          }}
        >
          {/* CLOUD ICON */}
          <img
            src={Cloud}
            alt="Cloud"
            style={{
              width: "55px",
              position: "absolute",
              top: "-38px",
              left: "135px",
              pointerEvents: "none",
            }}
          />

          {/* MATRIX HR TEXT */}
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <span
              style={{
                fontSize: "3.1rem",
                fontWeight: 900,
                color: "#366CB5",
                marginRight: "8px",
                lineHeight: "1",
              }}
            >
              Matrix
            </span>

            <span
              style={{
                fontSize: "3.1rem",
                fontWeight: 900,
                color: "#CD6032",
                lineHeight: "1",
              }}
            >
              HR
            </span>
          </div>

          {/* TECHNOLOGIES */}
          <div
            style={{
              fontSize: "1rem",
              letterSpacing: "6px",
              fontWeight: 700,
              color: "#7FAED6",
              marginTop: "6px",
              marginLeft: "4px",
            }}
          >
            TECHNOLOGIES
          </div>
        </div>

        {/* HERO TEXT */}
        <h2
          style={{
            fontSize: "2.2rem",
            fontWeight: 800,
            marginBottom: "12px",
          }}
        >
          {currentHero.title}
        </h2>

        <h3
          style={{
            fontSize: "1.35rem",
            fontWeight: 650,
            color: "#2F6DB5",
            marginBottom: "18px",
          }}
        >
          {currentHero.text}
        </h3>

        <p
          style={{
            fontSize: "1rem",
            maxWidth: "650px",
            color: "#4b5563",
            lineHeight: "1.7",
          }}
        >
          {currentHero.desc}
        </p>

        {/* BUTTONS */}
        <div className="d-flex gap-3 flex-wrap mt-4">
          <Button
            as={Link}
            to="/contact"
            className="hero-btn-primary"
            variant="none"
          >
            Get Started Free
          </Button>

          <Button
            as={Link}
            to="/demo"
            className="hero-btn-outline"
            variant="none"
          >
            Watch Demo
          </Button>
        </div>
      </Col>

      {/* RIGHT IMAGE */}
      <Col md={5} className="text-center">
        <div
          style={{
            maxWidth: "420px",
            margin: "auto",
            borderRadius: "22px",
            padding: "6px",
            background: "linear-gradient(135deg,#013879,#0d6efd)",
            boxShadow: "0 20px 45px rgba(0,0,0,0.22)",
          }}
        >
          <img
            src={heroImages[currentImage]}
            alt="hero"
            style={{
              width: "100%",
              maxHeight: "400px",
              objectFit: "contain",
              borderRadius: "18px",
              background: "#fff",
              animation: "float 5s ease-in-out infinite",
            }}
          />
        </div>
      </Col>
    </Row>
  </Container>

  {/* FLOAT ANIMATION */}
  <style>{`
    @keyframes float {
      0% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0); }
    }

    /* MOBILE RESPONSIVE */
    @media (max-width: 768px) {
      h2 {
        font-size: 1.7rem !important;
      }

      h3 {
        font-size: 1.1rem !important;
      }

      img {
        max-height: 280px !important;
      }

      span {
        font-size: 2.4rem !important;
      }
    }
  `}</style>
</section>



  {/* ✅ FULL RESPONSIVE HERO CSS */}
  <style>{`

    /* HERO MAIN */
    .hero-main {
      overflow: hidden;
    }

    /* BRAND BLOCK */
    .brand-block {
      position: relative;
      display: inline-block;
      margin-bottom: 25px;
    }

    .cloud-icon {
      width: 52px;
      position: absolute;
      top: -35px;
      left: 135px;
    }

    .brand-text {
      display: flex;
      align-items: baseline;
    }

    .matrix {
      font-size: 3.1rem;
      font-weight: 900;
      color: #366CB5;
      margin-right: 8px;
    }

    .hr {
      font-size: 3.1rem;
      font-weight: 900;
      color: #CD6032;
    }

    .tech-text {
      font-size: 1rem;
      letter-spacing: 5px;
      font-weight: 700;
      color: #7FAED6;
      margin-top: 6px;
    }

    /* HERO TEXT */
    .hero-title {
      font-size: 2.2rem;
      font-weight: 800;
      margin-bottom: 12px;
    }

    .hero-subtitle {
      font-size: 1.35rem;
      font-weight: 650;
      color: #2F6DB5;
      margin-bottom: 18px;
    }

    .hero-desc {
      font-size: 1rem;
      max-width: 650px;
      color: #4b5563;
      line-height: 1.7;
    }

    /* BUTTONS */
    .hero-buttons {
      margin-top: 25px;
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
    }

    /* IMAGE WRAPPER */
    .hero-image-wrapper {
      border-radius: 22px;
      overflow: hidden;
      padding: 6px;
      background: linear-gradient(135deg, #013879, #0d6efd);
      box-shadow: 0 20px 45px rgba(0,0,0,0.22);
      max-width: 420px;
      margin: auto;
    }

    .hero-image {
      width: 100%;
      height: auto;
      max-height: 420px;   /* ✅ FIXED (not 750px) */
      object-fit: contain;
      border-radius: 18px;
      background: white;
      animation: float 5s ease-in-out infinite;
    }

    /* FLOAT */
    @keyframes float {
      0% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0); }
    }

    /* ===================== MOBILE FIX ===================== */
    @media (max-width: 768px) {

      .hero-main {
        padding-top: 90px !important;
        text-align: center;
      }

      .hero-row {
        flex-direction: column;
      }

      .matrix, .hr {
        font-size: 2.4rem;
      }

      .hero-title {
        font-size: 1.7rem;
      }

      .hero-subtitle {
        font-size: 1.1rem;
      }

      .hero-desc {
        font-size: 0.95rem;
      }

      .hero-buttons {
        justify-content: center;
      }

      .hero-image-wrapper {
        margin-top: 30px;
        max-width: 320px;
      }

      .hero-image {
        max-height: 280px;
      }
    }

    /* ===================== SMALL LAPTOP FIX ===================== */
    @media (max-height: 720px) {

      .hero-main {
        padding-top: 75px !important;
        padding-bottom: 40px;
      }

      .hero-image {
        max-height: 330px;
      }
    }
 @keyframes float {
      0% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0); }
    }

    /* MOBILE RESPONSIVE */
    @media (max-width: 768px) {
      h2 {
        font-size: 1.7rem !important;
      }

      h3 {
        font-size: 1.1rem !important;
      }

      img {
        max-height: 280px !important;
      }

      span {
        font-size: 2.4rem !important;
      }
    }
      /* HERO BUTTONS */
.hero-btn-primary {
  background: #2F6DB5 !important;
  border: 2px solid #2F6DB5 !important;
  color: white !important;
  padding: 14px 36px !important;
  border-radius: 30px !important;
  font-weight: 600 !important;
  font-size: 1rem;
  transition: 0.3s ease;
}

.hero-btn-primary:hover {
  background: #1f4f8f !important;
  transform: scale(1.05);
}

/* OUTLINE BUTTON */
.hero-btn-outline {
  background: transparent !important;
  border: 2px solid #2F6DB5 !important;
  color: #2F6DB5 !important;
  padding: 14px 36px !important;
  border-radius: 30px !important;
  font-weight: 600 !important;
  font-size: 1rem;
  transition: 0.3s ease;
}

.hero-btn-outline:hover {
  background: #2F6DB5 !important;
  color: white !important;
  transform: scale(1.05);
}

  `}</style>


      {/* ========== SERVICES (FULL-PAGE SCROLL STYLE) ========== */}
<section
  id="asana-services"
  style={{
    minHeight: "100vh",
    scrollSnapAlign: "start",
    background: "#013789",
    scrollSnapAlign: "start",
    scrollSnapStop: "always",

  }} 
>


  {/* SECTION HEADING */}
  <div
    style={{
      position: "sticky",
      top: 0,
      zIndex: 10,
      background: "#013789",
      padding: "40px 0 20px",
      textAlign: "center",
    }}
  >
    <h2
      style={{
        color: "#ffffff",
        fontSize: "2.8rem",
        fontWeight: 700,
        marginBottom: "10px",
      }}
    >
      Our Services
    </h2>
 
  </div>
               
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <div
            key={pageIndex}
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "30px",
              scrollSnapAlign: "start",
     
            }}
          >
            {scrollableServices
              .slice(pageIndex * 2, pageIndex * 2 + 2)
              .map((service, i) => (
             <div
  key={i}
  className="service-card"
  style={{
    width: "35%",            // reduced from 45%
    background: "#fff",
    borderRadius: "20px",    // slightly smaller rounding
    padding: "25px",         // reduced from 40px
    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }}
> 
  <img
    src={service.image}
    alt={service.title}
    className="img-fluid mb-3"
    style={{
      borderRadius: "15px",
      maxHeight: "180px",  // reduced from 250px
      objectFit: "cover",
    }}
  />
  <h3
    style={{
      fontSize: "1.6rem",   // reduced from 2rem
      fontWeight: 700,
      textAlign: "center",
    }}
  >
    {service.title}
  </h3>
  <p
    style={{
      fontSize: "1rem",    // slightly smaller
      color: "#4b5563",
      textAlign: "center",
    }}
  >
    {service.desc}
  </p>
  <Button
    as={Link}
    to={service.path}
    className="hero-btn-primary mt-2"
    variant="none"
  >
    Learn More
  </Button>
</div>

              ))}
          </div>
        ))}
        <style>{`
          #asana-services::-webkit-scrollbar {
            width: 6px;
          }
          #asana-services::-webkit-scrollbar-thumb {
            background: rgba(255,255,255,0.3);
            border-radius: 3px;
          }
          .service-card {
            transition: transform 0.3s ease, opacity 0.3s ease;
          }
          .service-card:hover {
            transform: translateY(-10px);
          }
        `}</style>
      </section>

      {/* ========== LAST 4 SERVICES GRID ========== */}
<section
  id="last-services"
  style={{
    scrollSnapAlign: "start",
    scrollSnapStop: "always",
    backgroundColor: "#F3F4F6",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "50px",
    width: "100%",
    padding: "80px 20px", // top + bottom padding
  }}
>
  <h2
    style={{
      fontSize: "3rem",
      fontWeight: 800,
      color: "#1F2937",
      marginBottom: "40px",
    }}
  >
    Additional Features
  </h2>

  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "30px",
      maxWidth: "1200px",
      width: "100%",
    }}
  >
    {scrollServices.slice(8).map((service, i) => (
      <div
        key={i}
        className="service-card"
        style={{
          flex: "1 1 200px",
          maxWidth: "340px",
          background: "#fff",
          borderRadius: "20px",
          padding: "10px",
          boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          transition: "transform 0.3s ease, opacity 0.3s ease",
        }}
      >
        <img
          src={service.image}
          alt={service.title}
          className="img-fluid mb-3"
          style={{
            borderRadius: "15px",
            maxHeight: "150px",
            objectFit: "cover",
          }}
        />
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            marginBottom: "12px",
          }}
        >
          {service.title}
        </h3>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#4B5563",
            marginBottom: "15px",
          }}
        >
          {service.desc}
        </p>
        <Button
          as={Link}
          to={service.path}
          className="hero-btn-primary"
          variant="none"
        >
          Learn More
        </Button>
      </div>
    ))}
  </div>

  <style>{`
    .service-card:hover {
      transform: translateY(-10px);
    }
  `}</style>
</section>

     

      {/* ========== FOOTER CTA ========== 
      <Container className="py-5 text-center" style={{ position: "relative", zIndex: 2 }}>
        <h3 className="fw-bold mb-3 text-white">
          Ready to work with us?
        </h3> */}

      {/* ✅ FOOTER CONTACT BUTTON */}
      {/* <Button variant="primary" as={Link} to="/contact">
        Contact Us
      </Button>
      </Container> */}

     <section style={{ scrollSnapAlign: "start" , scrollSnapStop: "always"}}>
  <HomeAchievements />
</section>

<section style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}>
  <Partners />
</section>

      {/* <ComplianceChatbot /> */}
    </section>
  );
}

export default Home;
