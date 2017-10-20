import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { Info, User, BloodPressure} from "../../providers/auth-service/Info";

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
  infoNew: Info;

  constructor(private navCtrl: NavController,
              private auth: AuthServiceProvider,
              private alertCtrl: AlertController) {
  }
  private initial(){
    this.infoNew.user = new User(this.registerCredentials.name,
                                  this.registerCredentials.email,
                                  this.registerCredentials.password);
    this.infoNew.heart_rate = [0, 0, 0, 0, 0, 0, 0,];
    this.infoNew.bmi = [0, 0, 0, 0, 0, 0, 0,];
    this.infoNew.Emotion = [0, 0, 0, 0, 0, 0, 0,];
    this.infoNew.BP = [new BloodPressure(0,0),
                      new BloodPressure(0,0),
                      new BloodPressure(0,0),
                      new BloodPressure(0,0),
                      new BloodPressure(0,0),
                      new BloodPressure(0,0),
                      new BloodPressure(0,0),];
  }
  public register() {
    console.log(this.registerCredentials)
    if (this.passwdRepeat !== this.registerCredentials.password)
    {
      this.showPopup("Error", "Password not match");
      this.passwdRepeat = '';
      this.registerCredentials.password = '';

    }else {

      this.initial();
      console.log(this.infoNew);
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
