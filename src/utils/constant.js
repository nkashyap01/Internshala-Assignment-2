import { movieData } from "../data";

export const countries = [];
export const languages = [];
export const genres = [];

movieData.forEach((movie) => {
  movie.moviecountries.forEach((country) => {
    if (!countries.includes(country)) {
      countries.push(country);
    }
  });

  movie.movielanguages.forEach((language) => {
    if (!languages.includes(language)) {
      languages.push(language);
    }
  });

  movie.moviegenres.forEach((genre) => {
    if (!genres.includes(genre)) {
      genres.push(genre);
    }
  });
});
