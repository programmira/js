"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
    while(numberOfFilms == "" || numberOfFilms == null || numberOfFilms == isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
    }

}
start();

for(let i = 0; i < 2; i++) {
    const a = +prompt("Один из последних просмотренных фильмов?", ""),
    const b = +prompt("На сколько оцениваете его?", ""),
    if (a !== null && b !== null && a !== "" && b !== "" && a.length < 50) {
        console.log("")
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB() {
    if(personalMovieDB.privat = false) {
        console.log();
    }
}

const numberClients = +prompt("Сколько участников конкурса?", "");
const clients = [];
for(let i = 0; i < numberClients; i++) {
    clients[i] = prompt("Назовите имя участника", "");
}
let random = Math.floor(Math.random()*numberClients);
 alert(`Победил ${random}`)
