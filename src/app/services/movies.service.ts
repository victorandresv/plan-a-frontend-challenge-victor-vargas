import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }

  Latest(){
    return this.httpClient.get(environment.api.movies_latest_url+environment.api.key)
  }

  TopRated(page: number){
    return this.httpClient.get(environment.api.movies_top_rated+environment.api.key+"&page="+page)
  }
}
