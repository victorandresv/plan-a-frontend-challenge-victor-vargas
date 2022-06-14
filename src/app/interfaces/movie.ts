import { Languages } from "./languages"

export interface Movie {
    adult: boolean
    backdrop_path?: any
    belongs_to_collection?: any
    budget: number
    genres: any[]
    homepage: string
    id: number
    imdb_id?: any
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: any
    production_companies: any[]
    production_countries: any[]
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: Languages[]
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}
