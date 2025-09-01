import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../styles/common.css";

function CardImage(props) {
  return (
    <div className="card-container">
      <div className="card-content-custom">
        <CardMedia
          sx={{ height: 140 }}
          image="/arrowup.png"
          title="green iguana"
        />
        <CardContent>
          <div className="card-title-custom">
            <Typography
              sx={{ textAlign: "center" }}
              variant="h2"
              component="div"
            >
              {props.title}
            </Typography>
            <Typography variant="subtitle1">{props.subtitle}</Typography>
            <ul>
              {props.items.map((item, index) => (
                <li key={index}> {item} </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </div>
    </div>
  );
}

export default CardImage;
