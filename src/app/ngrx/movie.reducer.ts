import { createReducer, on } from "@ngrx/store";
import { Movie } from "../interfaces/movie";
import { LoadedMovieAction } from "./movie.actions";

export const initialState: Movie = {
    adult: false,
    budget: 0,
    genres: [],
    homepage: '',
    id: 0,
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: undefined,
    production_companies: [],
    production_countries: [],
    release_date: '',
    revenue: 0,
    runtime: 0,
    spoken_languages: [],
    status: '',
    tagline: '',
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0
}

export const movieReducer = createReducer(
    initialState,
    on(LoadedMovieAction, (movie) => movie)
)