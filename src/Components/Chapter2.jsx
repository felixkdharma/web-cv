import { Card } from "@mui/material";
import "../styles/chapter2.css";
import "../styles/chapter1.css";
import Stars from "./Stars.jsx";
import CardChapter2 from "./CardChapter2.jsx";

function Chapter2(props) {
  const goToChapter1 = () => {
    window.scrollTo({
      top: document.getElementById("chapter1").offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <section id="chapter2" style={{ position: "relative" }}>
      <div className="previous-button-container" style={{ top: 5 + "vh" }}>
        <div className="bounce-up">
          <img
            style={{ cursor: "pointer" }}
            onClick={goToChapter1}
            className="rotate-image"
            src="/arrowup.png"
            alt="arrowhead"
          />
          <h3
            style={{
              color: "#ffeb00",
              fontFamily: "'Press Start 2P, system-ui'",
              padding: 0,
              margin: 0,
              position: "absolute",
              left: -0.1 + "vw",
            }}
          >
            {" "}
            TITLE{" "}
          </h3>
        </div>
      </div>

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

        <div className="previous-button-container">
          <div className="bounce-up">
            <img
              style={{ cursor: "pointer", transform: "rotate(180deg)" }}
              onClick={goToChapter1}
              className="rotate-image"
              src="/arrowup.png"
              alt="arrowhead"
            />
            <h3
              style={{
                color: "#ffeb00",
                fontFamily: "'Press Start 2P, system-ui'",
                padding: 0,
                margin: 0,
                position: "absolute",
              }}
            >
              {" "}
              NEXT{" "}
            </h3>
          </div>
        </div>
      </div>
      <hr style={{
        backgroundColor: 'white',
        marginTop: '10vh'
      }} />
    </section>
  );
}

export default Chapter2;
