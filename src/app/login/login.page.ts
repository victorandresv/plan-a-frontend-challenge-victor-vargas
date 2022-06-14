import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Token } from '../interfaces/token';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.auth.isUserLogedIn() == 1){
      this.router.navigate(['/home']);
    } else if (this.auth.isUserLogedIn() == 2) {
      this.CallAPI("planatest", "123456");
    }
  }

  Login(form){
    if(this.ValidateEmail(form.value.email)){
      if(form.value.password.length >= 6){

        /** 
         * The requirement is to login with email and password, 
         * but the API has a user that is not of type email, 
         * therefore I am not connecting the email with the API user, 
         * I am only passing the password and the default user "planatest".
         * 
         * Enter the pass 123456 for successful login
        */

        this.CallAPI("planatest", form.value.password);
        
      } else {
        this.PresentAlert("Invalid password", "Please enter at least 6 characters");
      }
    } else {
      this.PresentAlert("Invalid email", "Please enter an valid email address");
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
      this.PresentAlert("Error", error.error.status_message)
    })
  }


  private async PresentAlert(title:string, message:string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
    await alert.onDidDismiss();
  }


  private ValidateEmail(email) {
    const data = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      if(data == null){
        return false;
      } else {
        return true;
      }
  };

}
