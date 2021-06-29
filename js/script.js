"use strict";

const numberOfFilms = +prompt("Сколько фильмов Вы уже просмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {}, // <-- Здесь будут храниться фильмы в формате Имя_фильма: Рейтинг_фильма
    actors:{},
    genres: [],
    privet: false
};

for (let i = 0; i < 2; i++) {
    const filmName = prompt("Один из последних просмотренных фильмов?", ""),
          filmRate = prompt("На сколько оцените его?", "");

    if (filmName != "" && filmRate != "" && filmName != null && filmRate != null && filmName.length < 50) {
        console.log("done");
    } else {   
        console.log("error");
        i--;
        console.log(i);
    }

}

if (personalMovieDB.count <= 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else {
    console.log("Вы киноман!");
}

console.log(personalMovieDB);


