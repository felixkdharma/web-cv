import "../styles/ufo.css";

function Ufo(props) {
  return (
    <img
      style={{
        position: props.position,
        height: props.height,
        width: props.width,
        top: props.top,
        left: props.left,
      }}
      src="/ufo.png"
      alt="ufo"
    />
  );
}

export default Ufo;
