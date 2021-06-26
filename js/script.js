"use strict";

console.log('arr'+'- object');
console.log('4'+'- object');
console.log(4 + 5);


let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);

console.log(13%2);

console.log(2*8 == 16);

console.log(2*8 === '16');

const isChecked = false,
      isClosed = false;

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("На сколько оцените его?", ""),
    c = prompt("Один из последних просмотренных фильмов?", ""),
    d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
