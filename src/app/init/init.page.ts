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
    if (this.auth.isUserLogedIn() == 1){
      this.router.navigate(['/home']);
    } else if (this.auth.isUserLogedIn() == 0){
      sessionStorage.clear();
      this.router.navigate(['/login']);
    } else {
      this.CallAPI("planatest", "123456");
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
