export const getMoviesBySearch = (movies, value) => {
    if (!movies?.length) return [];
    const filterMovies = value?.length > 0
        ? movies.filter(movie => movie.title.toLowerCase().includes(value.toLowerCase()))
        : movies;
    return filterMovies;
    //copy this make this for producer name, director name by adding or
}