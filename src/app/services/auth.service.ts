import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Login } from '../interfaces/login';
import { Token } from '../interfaces/token';

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

  isUserLogedIn(){
    let session:Token = {
      expires_at: null,
      request_token: null
    }

    //Try to parse a session. If exist redirect to home
    try {
      session = JSON.parse(sessionStorage.getItem('session_start'));
      if(typeof session.expires_at != 'undefined'){
        const expires = Date.parse(session.expires_at)

        if(expires > Date.now()){
          return 1
        } else {
          return 2
        }
      } else {
        return 0
      }
    } catch(e){
      return 0
    }
  }
  
}
