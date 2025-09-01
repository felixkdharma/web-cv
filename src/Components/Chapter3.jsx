import "../styles/common.css";
import "../styles/chapter3.css";
import Stars from "./Stars.jsx";
import CardImage from "./CardImage.jsx";
import { Card } from "@mui/material";

function Chapter3(props) {
  return (
    <section
      id="chapter3"
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <Stars />
      <div className="title-container">
        <h1> {props.title} </h1>
        <div className="subtitle-container">
          <h2> {props.subtitle} </h2>
        </div>
      </div>

      <CardImage
        title="PT Realta Chakra Dharma"
        subtitle="Working as Fullstack .NET Developer"
        items={[
          "Designing, Creating and Bug Fixing programs for Hospitality and Golf Management.",
          "Creating and Bug Fixing an API for Caddy Apps.",
          "Designing, Creating and Bug Fixing Reports using Crystal Reports.",
        ]}
      />
    </section>
  );
}

export default Chapter3;
