import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Placeholder image
import gcpProjectImg from "../../Assets/Projects/gcp.png";

function Projects() {
  return (
    <Container fluid className="project-section" style={{ paddingTop: "50px", paddingBottom: "50px" }}>
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ textAlign: "center", marginBottom: "30px" }}>
          Professional <strong className="purple">Projects</strong>
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#d1d5db",
            maxWidth: "800px",
            margin: "0 auto 40px auto",
            fontSize: "18px",
            lineHeight: "1.6em",
          }}
        >
          Highlighting my work as a <b className="purple">Technical Analyst</b> at <b className="purple">Infosys</b>,
          supporting enterprise customers on <b className="purple">Google Cloud Platform (GCP)</b>.  
          Key achievements, troubleshooting expertise, and cloud operational experience are showcased below.
        </p>

        <Row style={{ justifyContent: "center" }}>
          <Col xs={12} md={10} lg={8} className="project-card" style={{ marginBottom: "30px" }}>
            <ProjectCard
              imgPath={gcpProjectImg}
              isBlog={false}
              title="Technical Analyst at Infosys"
              description={
                <div style={{ padding: "0 15px" }}> {/* Added padding to prevent text from touching edges */}
                  Configured and supported enterprise applications hosted on Google Cloud Platform (GCP).  
                  <ul style={{ paddingLeft: "20px", marginTop: "15px", lineHeight: "1.5em", color: "#e5e7eb" }}>
                    <li>Supported enterprise customers in migrating on-premise workloads to GCP using Database Migration Service (DMS), Datastream, and Cloud SQL</li>
                    <li>Resolved 450+ customer issues across Google Cloud PaaS services while maintaining a 95%+ SLA compliance rate</li>
                    <li>Provided advanced troubleshooting for Cloud Storage, Cloud SQL, App Engine, Cloud Run, Cloud Functions, Cloud Build, Artifact Registry, Cloud Scheduler, and Firebase</li>
                    <li>Designed and implemented multi-region disaster recovery solutions with automated backups and replication</li>
                    <li>Audited and optimized IAM roles, enforced least-privilege access, and implemented IAM Conditions and Service Accounts</li>
                    <li>Implemented Cloud Monitoring and Cloud Logging to reduce incident resolution time by 35%</li>
                    <li>Collaborated with Google Cloud Product Engineers and Customer Engineers, reducing customer downtime by 50%</li>
                    <li>Analyzed recurring issues using logs and metrics, reducing escalations by 80%</li>
                  </ul>
                </div>
              }
              ghLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
