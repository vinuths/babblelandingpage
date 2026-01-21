import React from "react";
import { Container } from "react-bootstrap";

// ✅ Import partner logos
import partner1 from "../../Assets/partners/250px-Katerra_Primary_Logo.jpg";
import partner2 from "../../Assets/partners/algoshak.png";
import partner3 from "../../Assets/partners/aliceblue.png";
import partner4 from "../../Assets/partners/arcolab_logo.webp";
import partner5 from "../../Assets/partners/nearlogo.png";
import partner6 from "../../Assets/partners/automationanywhere.png";
import partner7 from "../../Assets/partners/damensch logo.png";
import partner8 from "../../Assets/partners/datanetiixlogo.png";
import partner9 from "../../Assets/partners/iifl.png";
import partner10 from "../../Assets/partners/infilogo.png";
import partner11 from "../../Assets/partners/ltlogo.png";
import partner12 from "../../Assets/partners/mjrlogo.png";
import partner13 from "../../Assets/partners/sunmobility.png";
import partner14 from "../../Assets/partners/batalogo.png";
import partner15 from "../../Assets/partners/carmelacdamey logo.jfif";
import partner16 from "../../Assets/partners/delhivery_logo.jfif";
import partner17 from "../../Assets/partners/futersoft.jfif";
import partner18 from "../../Assets/partners/strides.jfif";
import partner19 from "../../Assets/partners/credenceholdins.jfif";
import partner20 from "../../Assets/partners/snnbuliders.jfif";

const partners = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
  partner9,
  partner10,
  partner11,
  partner12,
  partner13,
  partner14,
  partner15,
  partner16,
  partner17,
  partner18,
  partner19,
  partner20,
];

const Partners = () => {
  return (
    <section
      style={{
backgroundColor: "#ffffffff",
        position: "relative",
        zIndex: 2,
        overflow: "hidden",
      }}iam saying 
    >
      {/* Built-in animation */}
      <style>
        {`
          @keyframes partnerScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

<Container fluid className="py-5 px-0">
      <h4 className="text-center fw-bold mb-4 text-dark">
  Our Trusted Clients
</h4>


        <div style={{ overflow: "hidden", width: "100%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "max-content",
              animation: "partnerScroll 120s linear infinite",
            }}
          >
            {[...partners, ...partners].map((logo, index) => (
              <div
                key={index}
                style={{
                  width: "160px",
                  padding: "12px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "120px",
                    height: "60px",
                    background: "#FFFFFF",
                    borderRadius: "10px",
                    boxShadow: "0 6px 20px #00000059",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "all 0.3s ease",
                  }}
                >
                  <img
                    src={logo}
                    alt="partner"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      padding: "8px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)";
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Partners;
