import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import { MoviesService } from '../services/movies.service';
import { LoadMovie } from './movie.actions';
 
@Injectable()
export class MovieEffects {

    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType(LoadMovie),
        exhaustMap(() => 
          this.moviesService.Latest().pipe(
            map(movie => ({ type: 'Load Latest Movie Success', payload: movie })),
            catchError(() => of({ type: 'Load Latest Movie Error' }))
          )
        )
      )
    );
 
  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}
}