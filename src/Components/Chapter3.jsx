import "../styles/common.css";
import "../styles/chapter3.css";
import Stars from "./Stars.jsx";
import CardImage from "./CardImage.jsx";

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
            <div className="card-container">

                <CardImage
                    title="PT Realta Chakra Dharma"
                    subtitle="Working as Fullstack .NET Developer - 2 Years++ WOE"
                    items={[
                        "Designing, Creating and Bug Fixing programs for Hospitality and Golf Management.",
                        "Creating and Bug Fixing an API for Caddy Apps.",
                        "Designing, Creating and Bug Fixing Reports using Crystal Reports.",
                    ]}
                    images={{
                        height: 100,
                        width: 100,
                        src: "/logo-realta.jpg"
                    }}
                />

                <CardImage
                    title="Udemy Course"
                    subtitle="Fullstack React Web Developer"
                    items={[
                        "Learning From Backend to Frontend",
                        "Learning and Practicing make REST API using NodeJs and PostgreSQL",
                        "Designing, Creating and Bug Fixing Reports using Crystal Reports.",
                    ]}
                    images={{
                        height: 100,
                        width: 200,
                        src: "/logo-udemy.png"
                    }}
                />
            </div>
        </section>
    );
}

export default Chapter3;
