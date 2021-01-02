"use strict";

let numberOfFilms;

function start () {
  numberOfFilms = +prompt('How many films have you seen?','');

  while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('How many films have you seen?','');
  }
}

start();


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


function rememberMyFilms() {

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
}

rememberMyFilms();


function detectPersonalLevel() {
  if(personalMovieDB.count < 10) {
    console.log('Not enough movies');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('You are ordenery watcher!');
} else if (personalMovieDB.count > 30) {
    console.log('You love movies');
} else {
    console.log('Something goes wrong!');
}
}

detectPersonalLevel();

function showMyDb(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}


console.log(personalMovieDB.movies);


function writeYourGenres() {
    for (let i = 1; i <= 3; i ++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favourite genre number ${i}?`);  
        
    }
}

writeYourGenres();
