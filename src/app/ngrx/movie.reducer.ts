import { Action, createReducer, on, State } from "@ngrx/store";
import { Movie } from "../interfaces/movie";

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

export function movieReducer(state = initialState, action: Action){
    switch(action.type){
        case 'LoadedMovieAction':
            const data:any = action
            const movie: Movie = data.payload
            return movie
        default:
            return state
    }
}

/*
export const movieReducer = createReducer(
    initialState,
    on(LoadedMovieAction, (movie) => {
        console.log(movie)
        return movie
    })
)
*/