import { createAction, props } from "@ngrx/store";
import { Movie } from "../interfaces/movie";

export const LoadMovie = createAction(
    'Load Latest Movie',
    props<{movie: Movie}>()
)