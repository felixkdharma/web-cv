import React from 'react';
import '../styles/chapter1.css';
import Stars from './Stars';
import NavButton from './NavButton';

function Chapter1(props) {

    return (
        <section id="chapter1" style={{
            position: 'relative',
            minHeight: '100vh',
            overflow: 'hidden',
            width: '100%',
        }}>

            <div className='chapter1-container'>
                <NavButton
                    goto='landpage'
                    top='-100vh'
                    cursor='pointer'
                    direction='PREVIOUS'
                    className='rotate-image'
                    src='/arrowup.png'
                    alt='arrowhead'
                    color='#ffeb00'
                    fontFamily="'Press Start 2P, system-ui'"
                    left='-1vw'
                    rotate='0deg'
                />
                <Stars
                    top="-95vh"
                />
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
                    top: -95 + 'vh',
                    left: 90 + 'vw',
                    height: 120 + 'px',
                    width: 120 + 'px',
                    zIndex: -3,
                    imageRendering: 'pixelated',
                    zIndex: 3,
                    filter: 'drop-shadow(0px 0px 30px rgba(241, 214, 90, 1))'
                }} src='/sun.png' alt='sun' />
            </div>

            <NavButton
                goto='chapter2'
                top='-20vh'
                cursor='pointer'
                direction='NEXT'
                className='rotate-image'
                src='/arrowup.png'
                alt='arrowhead'
                color='#ffeb00'
                fontFamily="'Press Start 2P, system-ui'"
                left='-0.1vw'
                rotate='180deg'
                margin='0'
                padding='0'
            />

            {/* <div className='image-button-container' style={{ top: '-20vh' }}>
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
                        left: -0.1 + 'vw'
                    }}> NEXT </h3>
                </div>
            </div> */}


        </section>

    )
}

export default Chapter1;