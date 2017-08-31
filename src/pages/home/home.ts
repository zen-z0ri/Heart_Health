import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthServiceProvider, User} from '../../providers/auth-service/auth-service';
import {ProfilePage} from "../profile/profile";
import {MedicinePage} from "../medicine/medicine";
import {SettingPage} from "../setting/setting";


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
  username: string = '';

  tab1Root = MedicinePage;
  tab2Root = ProfilePage;
  tab3Root = SettingPage;

  constructor(public navCtrl: NavController, public auth: AuthServiceProvider) {
    let info: User = this.auth.userInfo;
    this.username = info.name;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot('LoginPage')
    });
  }

}
