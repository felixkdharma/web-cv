import "../styles/common.css";
import "../styles/chapter4.css";
import Stars from "./Stars";
import NavButton from "./NavButton";
import { yellow } from "@mui/material/colors";

function Chapter4(props) {
  return (
    <section
      id="chapter4"
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <NavButton
        goto="chapter3"
        top="5vh"
        cursor="pointer"
        direction="PREVIOUS"
        className="rotate-image"
        src="/arrowup.png"
        alt="arrowhead"
        color="#ffeb00"
        fontFamily="'Press Start 2P, system-ui'"
        left="-1vw"
        rotate="0deg"
        zindex="3"
      />
      <Stars />
      <div className="title-container-chapter4">
        <h1> {props.title} </h1>
      </div>

      <div className="media-container">
        <img style={{ height: 50, width: 50 }} src="/instagram.png" />
        <h3> felixkd.12 </h3>

        <img style={{ height: 50, width: 50 }} src="/whatsapp.png" />
        <h3> 085213199936 </h3>

        <img style={{ height: 50, width: 50 }} src="/linkedin.png" />
        <h3>
          {" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/felix-kurniawan-dharma-372a13301/"
          >
            {" "}
            Felix Kurniawan Dharma{" "}
          </a>{" "}
        </h3>
      </div>
    </section>
  );
}

export default Chapter4;
