import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

function CardChapter2(props) {
  return (
    <Grid container spacing={2} alignItems="stretch">
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            display: "flex",
            height: "100%",
            backgroundColor: "transparent",
            borderRadius: 0,
            boxShadow: "none",
          }}
        >
          <React.Fragment>
            <CardContent
              sx={{
                maxWidth: '300px',
                backgroundColor: "#577BC1",
                border: "15px solid #344CB7",
                borderRadius: "25px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                  textShadow: "1px 1px 2px rgba(104, 104, 104, 0.3)",
                  fontFamily: "'Press Start 2P',  system-ui",
                  lineHeight: "3vh",
                  marginTop: "2vh",
                  color: "#ffeb00",
                }}
                variant="h2"
                component="div"
              >
                {props.title}
              </Typography>

              <Typography
                sx={{
                  padding: "10px",
                  textAlign: "center",
                  fontFamily: "'Press Start 2P',  system-ui",
                  fontSize: "15px",
                  color: "#ffeb00",
                }}
                variant="subtitle1"
              >
                {props.subtitle}
              </Typography>

              <ul>
                <div className="custom-list">
                  {props.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </div>
              </ul>
            </CardContent>
          </React.Fragment>
        </Card>
      </Grid>
    </Grid>
  );
}

export default CardChapter2;
