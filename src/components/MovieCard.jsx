import React from "react";

const MovieCard = ({
  movietitle,
  movielanguages,
  moviecountries,
  moviemainphotos,
  moviegenres,
}) => {
  if (!moviemainphotos[0]) return;

  return (
    <div className="flex gap-4 overflow-hidden bg-slate-700 rounded-md  shade sm:w-[25rem] w-[30rem] h-[20rem]">
      <img src={moviemainphotos} className="rounded-l-md " alt="moviepic" />
      <div className="flex flex-col">
        <h1 className="font-bold text-white text-2xl my-2">{movietitle}</h1>
        <div className="flex flex-col gap-3 mt-3">
          <ul className="flex gap-1 flex-wrap">
            {moviegenres.map((genre) => {
              return (
                <li className="bg-emerald-200 text-xs rounded-sm px-1 py-[2px]">
                  {genre}
                </li>
              );
            })}
          </ul>
          <ul className="flex flex-wrap gap-1">
            {movielanguages.map((language) => {
              return (
                <li className="bg-gray-400 text-xs rounded-sm px-1 py-[2px]">
                  {language}
                </li>
              );
            })}
          </ul>
          <ul className="flex flex-wrap gap-1">
            {moviecountries.map((country) => {
              return (
                <li className="bg-purple-200 text-xs rounded-sm px-1 py-[2px]">
                  {country}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

//  <div className="flex gap-4 overflow-hidden bg-slate-700 rounded-md  shade sm:w-[25rem] w-[30rem] h-[20rem]">
//    <img src={moviemainphotos} className="rounded-l-md" alt="moviepic" />
//    <div className="flex flex-col">
//      <h1 className="font-bold text-white text-2xl my-2">{movietitle}</h1>
//      <div className="flex flex-col gap-3 mt-3">
//        <ul className="flex gap-1 flex-wrap">
//          {moviegenres.map((genre) => {
//            return (
//              <li className="bg-emerald-200 text-xs rounded-sm px-1 py-[2px]">
//                {genre}
//              </li>
//            );
//          })}
//        </ul>
//        <ul className="flex flex-wrap gap-1">
//          {movielanguages.map((language) => {
//            return (
//              <li className="bg-gray-400 text-xs rounded-sm px-1 py-[2px]">
//                {language}
//              </li>
//            );
//          })}
//        </ul>
//        <ul className="flex flex-wrap gap-1">
//          {moviecountries.map((country) => {
//            return (
//              <li className="bg-purple-200 text-xs rounded-sm px-1 py-[2px]">
//                {country}
//              </li>
//            );
//          })}
//        </ul>
//      </div>
//    </div>
//  </div>;
