import '../styles/star.css';

function Stars(props) {

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
        <div className="star-position" style={{ top: props.top}}>
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
    )

}

export default Stars;