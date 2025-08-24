import '../styles/moon.css';

function GetMoon() {

    return (
        <img style={{
            position: 'absolute',
            width: '750px',
            height: '750px',
            zIndex: 2,
            imageRendering: 'pixelated',
            filter: 'drop-shadow(0px 0px 50px rgba(255, 255, 255, 0.7))'
        }} src ="/moon.png"/>
    )
}

export default GetMoon;