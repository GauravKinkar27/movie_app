import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovies } from "../../api/movies";
import MovieCard from "../../components/MovieCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {getMoviesBySearch} from "../../utils/getMoviesbySearch"

const Home = () => {
  const dispatch = useDispatch();

  const { movies, searchValue} = useSelector((state) => state.movies);

  const filterbyMovieName = getMoviesBySearch(movies, searchValue);


  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Box sx={{ flexGrow: 1, mt: 2 }}>
        <Grid container spacing={2}>
          {filterbyMovieName.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
