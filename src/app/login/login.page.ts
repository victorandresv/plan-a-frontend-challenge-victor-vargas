import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  Login(form){
    if(this.ValidateEmail(form.value.email)){
      if(form.value.password.length >= 6){
        
      } else {
        this.PresentAlert("Invalid password", "Please enter at least 6 characters");
      }
    } else {
      this.PresentAlert("Invalid email", "Please enter an valid email address");
    }
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
