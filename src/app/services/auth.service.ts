import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  async Login(email:string, password:string){
    const keydata:any = await this.httpClient.get(environment.api.auth_token_url+environment.api.key).toPromise();
    if(keydata.success){
      const payload: Login = {
        username: email,
        password: password,
        request_token: keydata.request_token
      }
      return await this.httpClient.post(environment.api.auth_login_url+environment.api.key, payload).toPromise();
    } else {
      //"MESSAGE ABOUT ERROR"
    }
  }
}
