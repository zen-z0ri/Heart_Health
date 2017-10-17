import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthServiceProvider, MedicineInfo, User} from "../../providers/auth-service/auth-service";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials: User = new User("", "", "");

  constructor(public navCtrl: NavController,
              private auth: AuthServiceProvider,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController) {}
  public createAccount() {
    this.navCtrl.push('RegisterPage');
  }
  public login() {
    this.showLoading();
    this.auth.login(this.registerCredentials).subscribe(allowed => {
        (allowed) ? this.navCtrl.setRoot('HomePage') : this.showError("Please Check your Detail")
      },
      error => {
        this.showError(error);
      });
  }

  public showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  public showError(text) {
    this.loading.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Fail',
      message: text,
      buttons: ['OK']
    });
    alert.present();
  }

}


