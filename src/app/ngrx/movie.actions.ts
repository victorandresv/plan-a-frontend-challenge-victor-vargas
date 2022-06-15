import { createAction, props } from "@ngrx/store";
import { Movie } from "../interfaces/movie";

export const LoadMovieAction = createAction(
    'LoadMovieAction',
    props<{movie: Movie}>()
)

export const LoadedMovieAction = createAction(
    'LoadedMovieAction',
    props<{movie: Readonly<Movie>}>()
)