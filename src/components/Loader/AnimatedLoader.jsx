import React, { useEffect, useState } from "react";
import { Box, Typography, keyframes } from "@mui/material";
import logo from "../../assets/Logo1.png"; // logo import

const pulse = keyframes`
  0% {
    transform: scale(0.95);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(0.95);
    opacity: 0.7;
  }
`;

const wave = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const AnimatedLoader = () => {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "." : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      {/* Animated circles */}
      <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
        {[1, 2, 3].map((i) => (
          <Box
            key={i}
            sx={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              backgroundColor: "#013879",
              animation: `${wave} 1.5s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </Box>

      {/* Logo/Brand */}
      <Box
        sx={{
          animation: `${pulse} 2s ease-in-out infinite`,
          mb: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            background: "linear-gradient(135deg, #013879 0%, #014a96 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          <img src={logo} alt="Logo" style={{ width: 90, height: 60 }} />
        </Typography>
      </Box>

      {/* Loading text */}
      <Typography
        variant="body1"
        sx={{
          color: "#013879",
          fontWeight: 500,
          letterSpacing: "0.5px",
        }}
      >
        Loading{dots}
      </Typography>

      {/* Progress bar */}
      <Box
        sx={{
          width: 300,
          height: 4,
          backgroundColor: "#e0e0e0",
          borderRadius: 2,
          mt: 3,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "30%",
            height: "100%",
            backgroundColor: "#013879",
            borderRadius: 2,
            animation: "loading 2s ease-in-out infinite",
            "@keyframes loading": {
              "0%": {
                transform: "translateX(-100%)",
              },
              "100%": {
                transform: "translateX(400%)",
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default AnimatedLoader;
