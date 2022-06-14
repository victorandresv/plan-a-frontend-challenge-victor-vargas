import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from '../interfaces/token';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-init',
  templateUrl: './init.page.html',
  styleUrls: ['./init.page.scss'],
})
export class InitPage implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    let session:Token = {
      expires_at: null,
      request_token: null
    }

    //Try to parse a session. If exist redirect to home
    try {
      session = JSON.parse(sessionStorage.getItem('session_start'));
      const expires = Date.parse(session.expires_at) // <<----- My only concern here is if the validation is correct due to the time zone, because I don't know what the time zone of the date given by the API is.

      if(expires > Date.now()){
        this.router.navigate(['/home']);

      } else {
        this.CallAPI("planatest", "123456");
      }
    } catch(e){
      this.router.navigate(['/login']);
      console.log(e)
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

      this.router.navigate(['/home']);

    }).catch(error =>{
      console.log(error)
    })
  }

}
