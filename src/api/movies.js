import axios from "axios";
import { setMovies } from "../slice/movieSlice";

export const getMovies = () => async (dispatch) => {
  const url = "https://ghibliapi.vercel.app/films";

  try {
    const { data } = await axios.get(url);
    dispatch(setMovies(data));
  } catch (err) {
    console.log(err);
  }
};