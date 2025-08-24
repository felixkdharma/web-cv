import '../styles/earth.css';

function Earth() {

    return (
        <div className='crop-img'> 
            <img style={{
                position: 'absolute',
                width: '1700px',
                imageRendering: 'pixelated',
                filter: 'drop-shadow(0px 0px 50px rgba(101, 182, 236, 1))',
            }} 
            src="/earth.png" alt="Earth" />
        </div>
    )
}

export default Earth;