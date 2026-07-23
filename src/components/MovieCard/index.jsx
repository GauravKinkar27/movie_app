import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";

export default function MovieCard({ movie }) {
  const { title, image, director, producer, running_time } = movie;

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            height: 250,
            objectFit: "cover",
          }}
        />

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            variant="h5"
            sx={{
              minHeight: 64,
            }}
          >
            {title}
          </Typography>

          <Typography variant="body2">Directed by : {director}</Typography>

          <Typography variant="body2">Produced by : {producer}</Typography>
        </CardContent>

        <CardActions>
          <IconButton>
            <FavoriteIcon />
          </IconButton>

          <Typography variant="body2">
            Duration : {running_time} Minutes
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  );
}
