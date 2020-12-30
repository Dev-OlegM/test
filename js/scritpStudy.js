"use strict";

const numberOfFilms = prompt('How many films have you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



const a = prompt("Last seen movie?", " "),
      b = prompt("Score?", ""),
      c = prompt("Last seen movie?", " "),
      d = prompt("Score?", "");

      

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


