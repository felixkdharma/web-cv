import "../styles/common.css";
import "../styles/chapter3.css";
import Stars from "./Stars.jsx";
import CardImage from "./CardImage.jsx";
import NavButton from "./NavButton.jsx";
import Ufo from "./Ufo.jsx";

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
      <NavButton
        goto="chapter2"
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
      <div className="title-container">
        <h1> {props.title} </h1>
        <div className="subtitle-container">
          <h2> {props.subtitle} </h2>
        </div>
      </div>
      <Ufo
        position="absolute"
        top="30%"
        left="33%"
        height="80px"
        width="80px"
      />

      <Ufo
        position="absolute"
        top="30%"
        left="63%"
        height="80px"
        width="80px"
      />

      <div className="card-container">
        <CardImage
          title="PT Realta Chakra Dharma"
          subtitle="Working as Fullstack .NET Developer - 2 Years++ WOE"
          items={[
            {
              text: "Designing, Creating and Bug Fixing programs for Hospitality and Golf Management.",
            },
            { text: "Creating and Bug Fixing an API for Caddy Apps." },
            {
              text: "Designing, Creating and Bug Fixing Reports using Crystal Reports.",
            },
          ]}
          images={{
            height: 100,
            width: 100,
            src: "/logo-realta.jpg",
          }}
        />

        <CardImage
          title="Udemy Course"
          subtitle="Fullstack React Web Developer"
          items={[
            { text: "Learning From Backend to Frontend" },
            {
              text: "Learning and Practicing make REST API using NodeJs and PostgreSQL",
            },
            {
              text: "Designing, Creating and Bug Fixing Reports using Crystal Reports.",
            },
            {
              text: "Click to view Certificate ",
              pdf: "/sertifikat-reactjs.pdf",
            },
          ]}
          images={{
            height: 100,
            width: 200,
            src: "/logo-udemy.png",
          }}
          others
        />
      </div>

      <NavButton
        goto="chapter4"
        top="2vh"
        cursor="pointer"
        direction="NEXT"
        className="rotate-image"
        src="/arrowup.png"
        alt="arrowhead"
        color="#ffeb00"
        fontFamily="'Press Start 2P, system-ui'"
        left="-0.1vw"
        rotate="180deg"
        margin="0"
        padding="0"
      />
    </section>
  );
}

export default Chapter3;
