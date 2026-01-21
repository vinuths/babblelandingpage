import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card
      className="project-card-view"
      style={{
        maxWidth: "100%", // ensures card does not overflow on small screens
        margin: "auto",   // centers card horizontally on small screens
      }}
    >
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>
          {typeof props.description === "string" ? (
            props.description
          ) : (
            <div style={{ paddingLeft: "15px" }}>{props.description}</div>
          )}
        </Card.Text>

        {/* Render GitHub button ONLY if link exists */}
        {props.ghLink && props.ghLink !== "#" && (
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            style={{ marginBottom: "5px" }} // spacing for stacked buttons on mobile
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {/* Render Demo button ONLY if demoLink exists */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px", marginTop: "5px" }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
