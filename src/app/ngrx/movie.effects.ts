import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { MoviesService } from '../services/movies.service';
import { LoadMovieAction } from './movie.actions';
 
@Injectable()
export class MovieEffects {

    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType(LoadMovieAction),
        mergeMap(() => this.moviesService.Latest().pipe(
            map(movie => ({ type: 'LoadedMovieAction', payload: movie })),
            catchError(() => EMPTY)
          )
        )
      )
    );
 
  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}
}