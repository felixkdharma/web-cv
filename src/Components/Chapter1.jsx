import React from 'react';
import '../styles/chapter1.css';

function Chapter1(props) {

    const stars = Array.from({ length: 100 }, (_, i) => {

        let top, left;
        top = Math.random() * 100 + '%';   // posisi vertikal random
        left = Math.random() * 100 + '%';  // posisi horizontal random

        return {
            id: i + 1,
            top: top,
            left: left, 
        }
    });

    const goToHome = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const goToChapter2 = () => {
        window.scrollTo({
            top: document.getElementById('chapter2').offsetTop,
            behavior: 'smooth'
        })
    }

    return (
        <section id="chapter1">

            <div className='previous-button-container'>
                <div className='bounce-up'>
                    <img style={{ cursor: 'pointer' }} onClick={goToHome} className='rotate-image' src='/arrowup.png' alt='arrowhead' />
                    <h3 style={{
                        color: '#ffeb00',
                        fontFamily: "'Press Start 2P, system-ui'",
                        padding: 0,
                        margin: 0,
                        position: 'absolute',
                        left: -0.2 + 'vw',
                    }}> TITLE </h3>
                </div>
            </div>

            <div className='chapter1-container'>
                <div className='star-position-2'>

                    <div className='star-sprinkle'>
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


                <div className='text-format'>
                    <div className='header-align'>
                        <div className='glow-text'>
                            <h1> {props.title} </h1>
                            <h2> {props.subtitle} </h2>
                        </div>
                    </div>

                    <div className='desc-align'>
                        <p> {props.description} </p>
                    </div>

                </div>

                <img className="rocket-container" src="/rocket.gif" alt="rocket" />

                <div className='wrap-container'>

                    <div className='wrap-speed'></div>
                    <div className='wrap-speed'></div>
                    <div className='wrap-speed'></div>
                    <div className='wrap-speed'></div>
                    <div className='wrap-speed'></div>

                </div>

                <img style={{
                    position: 'absolute',
                    top: -100 + 'vh',
                    left: 90 + 'vw',
                    height: 100 + 'px',
                    width: 100 + 'px',
                    zIndex: -2,
                    filter: 'drop-shadow(0px 0px 30px rgba(241, 214, 90, 1))'
                }} src='/sun.png' alt='sun' />
            </div>

            <div className='next-button-container'>
                <div className='bounce-up'>
                    <img style={{
                        cursor: 'pointer',
                        rotate: '180deg'
                    }} onClick={goToChapter2} className='rotate-image' src='/arrowup.png' alt='arrowhead' />
                    <h3 style={{
                        color: '#ffeb00',
                        fontFamily: "'Press Start 2P, system-ui'",
                        padding: 0,
                        margin: 0,
                        position: 'absolute',
                        left: -0.2 + 'vw'
                    }}> NEXT </h3>
                </div>
            </div>

            <hr style={{
                backgroundColor: 'white',
                marginTop: -15 + 'vh'
            }} />

        </section>

    )
}

export default Chapter1;