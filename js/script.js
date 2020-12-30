"use strict";

const numberOfFilms = +prompt('How many films have you seen?','');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('What is your last seen movie?', '');
const b = prompt('What is a rate?', '');
const c = prompt('What is your last seen movie?', '');
const d = prompt('What is a rate?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB.movies);
