// src/components/Home/HomeAchievements.jsx
import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

const achievementsData = [
  { value: 50000, suffix: "+", label: "Compliance Delivered" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 1000, suffix: "+", label: "Clients Served" },
  { value: 100, suffix: "+", label: "Expert Consultants" },
];

const HomeAchievements = () => {
  const [counters, setCounters] = useState(
    achievementsData.map(() => 0)
  );
  const ref = useRef();

  useEffect(() => {
    let observer;
    if (ref.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Start counting animation
            achievementsData.forEach((ach, idx) => {
              const increment = Math.ceil(ach.value / 100); // adjust speed
              let current = 0;

              const interval = setInterval(() => {
                current += increment;
                if (current >= ach.value) {
                  current = ach.value;
                  clearInterval(interval);
                }
                setCounters((prev) =>
                  prev.map((v, i) => (i === idx ? current : v))
                );
              }, 20);
            });
            observer.disconnect(); // stop observing after counting
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(ref.current);
    }

    return () => observer && observer.disconnect();
  }, []);

  return (
    <Container
      ref={ref}
      fluid
      className="py-5"
      style={{
backgroundColor: "#e2622a",
        color: "#ffffff",
        position: "relative",
        zIndex: 2,
      }}
    >
      <Container>
        <h4 className="text-center fw-bold mb-4">Our Achievements</h4>
        <Row>
          {achievementsData.map((ach, i) => (
            <Col md={3} sm={6} key={i} className="text-center mb-3">
              <h3 className="fw-bold">
                {counters[i].toLocaleString()}
                {ach.suffix}
              </h3>
              <p>{ach.label}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default HomeAchievements;
