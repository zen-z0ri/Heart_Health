import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { AuthServiceProvider, User} from "../../providers/auth-service/auth-service";

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  createSuccess: boolean = false;
  registerCredentials: User = new User("", "", "");
  passwdRepeat: string = '';

  constructor(private navCtrl: NavController,
              private auth: AuthServiceProvider,
              private alertCtrl: AlertController) {
  }

  public register() {
    if (this.passwdRepeat !== this.registerCredentials.password)
    {
      this.showPopup("Error", "Password not match");
      this.passwdRepeat = '';
      this.registerCredentials.password = '';

    }else {
      this.auth.register(this.registerCredentials).subscribe(success => {
          if (success) {
            this.createSuccess = true;
            this.showPopup("Success", "Account created.");
          } else {
            this.showPopup("Error", "Problem creating account.");
          }
        },
        error => {
          this.showPopup("Error", error);
        });
    }
  }

  showPopup(title: string, text: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.navCtrl.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }

}
