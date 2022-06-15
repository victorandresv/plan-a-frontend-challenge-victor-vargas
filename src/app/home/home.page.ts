import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movie';
import { Token } from '../interfaces/token';
import { LoadMovieAction } from '../ngrx/movie.actions';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  movie$: Observable<Movie> = this.store.select(state => state.movie);
  
  public latest_movie: Movie;

  constructor(
    private store: Store<{movie: Movie}>,
    private router: Router,
    private auth: AuthService
    ) { }

  ngOnInit() {
    if (this.auth.isUserLogedIn() == 0){
      this.router.navigate(['/login']);
    } else if (this.auth.isUserLogedIn() == 2) {
      this.CallAPI("planatest", "123456");
    } else if (this.auth.isUserLogedIn() == 1){
      this.store.dispatch({type: 'LoadMovieAction'});
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

      this.store.dispatch({type: 'LoadMovieAction'});

    }).catch(error =>{
      this.router.navigate(['/init']);
    })
  }

}
