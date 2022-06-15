import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Movie } from "../interfaces/movie";

export const selectMovie = createFeatureSelector<Readonly<Movie>>('movie');

export const selectMovieMap = createSelector(
    selectMovie,
    (movie) => movie
)