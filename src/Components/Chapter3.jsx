import "../styles/common.css";
import "../styles/chapter3.css";
import Stars from "./Stars.jsx";

function Chapter3(props) {

    return (
        <section id='chapter3' style={{
            position: 'relative',
            minHeight: '100vh',
            overflow: 'hidden',
            width: '100%',
        }}>
            <Stars />
            <div className="title-container">
                <h1> {props.title} </h1>
                <div className="subtitle-container">
                    <h2> {props.subtitle} </h2>

                </div>
            </div>
        </section>
    )
}

export default Chapter3;