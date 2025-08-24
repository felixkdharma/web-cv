import React from "react";
import '../styles/star.css';
import Title from './Title';
import Moon from './Moon';
import Earth from './Earth';
import Mars from "./Mars";
import Jupiter from "./Jupiter";
import Saturnus from "./Saturnus";
import StartButton from "./StartButton";

function LandPage() {

    const stars = Array.from({ length: 100 }, (_, i) => {

        let top, left;
        top = Math.random() * 100 + '%';   // posisi vertikal random
        left = Math.random() * 100 + '%';  // posisi horizontal random

        return {
            id: i,
            top: top,
            left: left,
        }
    });

    return (
        <div className="wrapper">
            <div className="moon-position">
                <Moon />
            </div>
            <Saturnus />
            <Mars />
            <Earth />
            <hr style={{
                backgroundColor: 'white',
                marginTop: '100vh'
            }} />
            <Jupiter />
            <div className="star-position">
                <div className="star-sprinkle">
                    {stars.map(star => (
                        <img
                            key={star.id}
                            src={"/glitter.png"}
                            alt="star"
                            style={{
                                position: 'absolute',
                                margin: 5,
                                top: star.top,
                                left: star.left,
                                width: 18 + 'px',
                                height: 18 + 'px'
                            }}
                        />
                    ))}
                </div>

            </div>

            <Title />
            <StartButton />
        </div>

    )
}

export default LandPage;