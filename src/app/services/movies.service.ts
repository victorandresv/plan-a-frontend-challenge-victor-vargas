import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }

  async Latest(){
    return await this.httpClient.get(environment.api.movies_latest_url+environment.api.key).toPromise();
  }
}
