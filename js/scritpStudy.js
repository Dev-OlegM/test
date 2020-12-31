"use strict";

const numberOfFilms = +prompt('How many films have you seen?','');



const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt('What is your last seen movie?', '');
    const b = prompt('What is a rate?', '');

    if(a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('good');
    } else {
        i--;
        console.log('bad');
    }

    
}


if(personalMovieDB.count < 10) {
    console.log('Not enough movies');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('You are ordenery watcher!');
} else if (personalMovieDB.count > 30) {
    console.log('You love movies');
} else {
    console.log('Something goes wrong!');
}


console.log(personalMovieDB.movies);