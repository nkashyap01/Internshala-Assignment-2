import React from "react";
import MovieCard from "./MovieCard";
import { movieData } from "../data";
import { useState } from "react";
import { countries, genres, languages } from "../utils/constant";

const MovieHome = () => {
  const [movies, setMovies] = useState(movieData);

  const handleLanguage = (e) => {
    const filteredMovies = movieData.filter((movie) => {
      return movie.movielanguages.includes(e.target.value);
    });
    setMovies(filteredMovies);
  };

  const handleCountry = (e) => {
    const filteredMovies = movieData.filter((movie) => {
      return movie.moviecountries.includes(e.target.value);
    });
    setMovies(filteredMovies);
  };

  const handleGenre = (e) => {
    const filteredMovies = movieData.filter((movie) => {
      return movie.moviegenres.includes(e.target.value);
    });
    setMovies(filteredMovies);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center gap-5 justify-center relative -top-16 sm:top-0 sm:my-5 sm:gap-1 sm:flex-col md:top-0 md:my-5 lg:my-5 lg:top-0">
        <select onChange={handleGenre}>
          <option value="" disabled selected>
            Genre
          </option>
          {genres.map((genre) => {
            return <option value={genre}>{genre}</option>;
          })}
        </select>
        <select onChange={handleLanguage}>
          <option value="" disabled selected>
            Language
          </option>
          {languages.map((lan) => {
            return <option value={lan}>{lan}</option>;
          })}
        </select>
        <select onChange={handleCountry}>
          <option value="" disabled selected>
            Country
          </option>
          {countries.map((country) => {
            return <option value={country}>{country}</option>;
          })}
        </select>
      </div>

      <div className="flex flex-wrap gap-10 justify-center items-center">
        {movies.map(
          ({
            movietitle,
            imdbmovieid,
            movielanguages,
            moviecountries,
            moviemainphotos,
            moviegenres,
          }) => {
            return (
              <MovieCard
                movietitle={movietitle}
                key={imdbmovieid}
                movielanguages={movielanguages}
                moviecountries={moviecountries}
                moviemainphotos={moviemainphotos}
                moviegenres={moviegenres}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default MovieHome;
