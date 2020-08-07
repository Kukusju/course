
"use strict";
const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const lastFilm1 = prompt("Один из последних просмотренных фильмов?", ""),
    yourAssessment1 = prompt("На сколько оцените его?", ""),
    lastFilm2 = prompt("Один из последних просмотренных фильмов?", ""),
    yourAssessment2 = prompt("На сколько оцените его?", "");

const personalMovieDB = {
    count: numberOfFilms, 
    movies: {}, 
    actors: "", 
    genres: [],
    privat: false
};

personalMovieDB.movies[lastFilm1] = yourAssessment1;
personalMovieDB.movies[lastFilm2] = yourAssessment2;

console.log(personalMovieDB);


