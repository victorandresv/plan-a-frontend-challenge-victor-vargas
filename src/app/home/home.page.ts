import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../interfaces/movie';
import { Token } from '../interfaces/token';
import { AuthService } from '../services/auth.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public latest_movie:Movie = {
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

  constructor(
    private movies: MoviesService,
    private router: Router,
    private auth: AuthService
    ) {}

  ngOnInit() {
    if (this.auth.isUserLogedIn() == 0){
      this.router.navigate(['/login']);
    } else if (this.auth.isUserLogedIn() == 2) {
      this.CallAPI("planatest", "123456");
    } else if (this.auth.isUserLogedIn() == 1){
      this.LoadLatestMovie()
    }
  }

  private CallAPI(username: string, password: string){
    this.auth.Login(username, password).then(response => {
      const data:any = response;
      const token: Token = {
        expires_at: data.expires_at,
        request_token: data.request_token
      }
      sessionStorage.setItem("session_start", JSON.stringify(token));

      this.LoadLatestMovie()

    }).catch(error =>{
      this.router.navigate(['/init']);
    })
  }


  private LoadLatestMovie(){
    this.movies.Latest().then(response => {
      const data:any = response;
      this.latest_movie.title = data.title;
      this.latest_movie.adult = data.adult;
      this.latest_movie.backdrop_path = data.backdrop_path;
      this.latest_movie.budget = data.budget;
      data.genres.forEach(element => {
        this.latest_movie.genres.push(element)
      });
      this.latest_movie.homepage = data.homepage;
      this.latest_movie.id = data.id;
      this.latest_movie.imdb_id = data.imdb_id;
      this.latest_movie.original_language = data.original_language;
      this.latest_movie.original_title = data.original_title;
      this.latest_movie.overview = data.overview;
      this.latest_movie.popularity = data.popularity;
      this.latest_movie.poster_path = data.poster_path;
      this.latest_movie.production_companies = data.production_companies;
      this.latest_movie.production_countries = data.production_countries;
      this.latest_movie.release_date = data.release_date;
      this.latest_movie.revenue = data.revenue;
      this.latest_movie.runtime = data.runtime;
      this.latest_movie.spoken_languages = data.spoken_languages;
      this.latest_movie.status = data.status;
      this.latest_movie.tagline = data.tagline;
      this.latest_movie.video = data.video;
      this.latest_movie.vote_average = data.vote_average;
      this.latest_movie.vote_count = data.vote_count;

      console.log(response)
    }).catch(error => {
      console.log(error)
    })
  }

}
