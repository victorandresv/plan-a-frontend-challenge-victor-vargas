import { Movie } from "../interfaces/movie";

export interface AppState{
    movie: Readonly<Movie>;
}