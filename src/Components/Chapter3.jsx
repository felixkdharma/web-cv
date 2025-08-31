import "../styles/common.css";
import "../styles/chapter3.css";
import Stars from "./Stars.jsx";
import CardImage from "./CardImage.jsx";
import { Card } from "@mui/material";

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
            
            <CardImage />

        </section>
    )
}

export default Chapter3;