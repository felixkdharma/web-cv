import { Card } from "@mui/material";
import "../styles/chapter2.css";
import "../styles/common.css";
import "../styles/chapter1.css";
import Stars from "./Stars.jsx";
import CardChapter2 from "./CardChapter2.jsx";
import NavButton from "./NavButton.jsx";

function Chapter2(props) {
  return (
    <section
      id="chapter2"
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <NavButton
        goto="chapter1"
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

      <div className="container">
        <Stars />

        <h1> {props.title} </h1>
        <h2> {props.subtitle}</h2>

        <div className="content-container">
          <CardChapter2
            title="SENIOR HIGH SCHOOL"
            subtitle="SMAK BPK PENABUR BANDAR LAMPUNG"
            items={[
              "Graduated in 2018",
              "Student at Science Major",
              "Active in extracurricular activities and Student Council",
            ]}
          />

          <CardChapter2
            title="COLLEGE"
            subtitle="INSTITUT TEKNOLOGI HARAPAN BANGSA"
            items={[
              "Graduated in 2023",
              "Graduated with GPA 3.36/4.00",
              "Active in College Council and Student Association",
              "Have done as Lecturer Assistant in Object Oriented Programming Course",
            ]}
          />
        </div>
      </div>

      <NavButton
        goto="chapter3"
        top="5vh"
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

export default Chapter2;
