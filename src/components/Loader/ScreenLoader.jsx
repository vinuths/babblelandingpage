import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography, Fade } from "@mui/material";
import logo from "../../Assets/Logo1.png"; // logo import

const ScreenLoader = ({ loading, delay = 0 }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer;
    if (loading) {
      timer = setTimeout(() => setShow(true), delay);
    } else {
      setShow(false);
    }
    return () => clearTimeout(timer);
  }, [loading, delay]);

  if (!show) return null;

  return (
    <Fade in={show} timeout={500}>
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
          overflow: "hidden",
        }}
      >
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress
            size={80}
            thickness={4}
            sx={{
              color: "#013879",
              animationDuration: "1.5s",
            }}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={logo} // Replace with your logo path
              alt="Logo"
              sx={{
                width: 40,
                height: 40,
              }}
            />
          </Box>
        </Box>
        <Typography
          variant="h6"
          sx={{
            mt: 3,
            color: "#013879",
            fontWeight: 600,
            letterSpacing: "0.5px",
          }}
        >
          Loading...
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: 1,
            color: "#666",
            maxWidth: "300px",
            textAlign: "center",
          }}
        >
          Preparing your experience
        </Typography>
      </Box>
    </Fade>
  );
};

export default ScreenLoader;
