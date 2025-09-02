import React from "react";
import "../styles/star.css";
import Title from "./Title";
import Moon from "./Moon";
import Earth from "./Earth";
import Mars from "./Mars";
import Jupiter from "./Jupiter";
import Saturnus from "./Saturnus";
import StartButton from "./StartButton";
import Stars from "./Stars";

function LandPage() {
  return (
    <section
      id="landpage"
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <div className="wrapper">
        <div className="moon-position">
          <Moon />
        </div>
        <Saturnus />
        <Mars />
        <Earth />
        <Jupiter />
        <Stars />
        <Title />
        <StartButton />
      </div>
    </section>
  );
}

export default LandPage;
