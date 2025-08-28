import '../styles/navbutton.css';

function NavButton(props) {

    const goToSection = () => {
        const target = document.getElementById(props.goto);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }


    return (<div className='image-button-container' style={{ top: props.top }}>
        <div className='bounce-up'>
            <div style={{ cursor: props.cursor }} onClick={goToSection}>
                <img style={{
                    rotate: props.rotate,
                    position: 'relative',
                    zIndex: props.zindex
                }} className={props.className} src={props.src} alt={props.alt} />
            </div>
            <h3 style={{
                color: props.color,
                fontFamily: props.fontFamily,
                margin: props.margin,
                padding: props.padding,
                position: 'absolute',
                left: props.left
            }}> {props.direction} </h3>
        </div>
    </div>
    )
}

export default NavButton;