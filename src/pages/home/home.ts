import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { ProfilePage} from "../profile/profile";
import { MedicinePage} from "../medicine/medicine";
import { SettingPage} from "../setting/setting";

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  // username: string = '';

  tab1Root = MedicinePage;
  tab2Root = ProfilePage;
  tab3Root = SettingPage;
  name: string;
  constructor(public navCtrl: NavController, public auth: AuthServiceProvider) {
    this.name = this.auth.currentUserInfo.user.name;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  public logout() {
    this.auth.logout().subscribe(success => {
      this.navCtrl.setRoot('LoginPage')
    });
  }
}
