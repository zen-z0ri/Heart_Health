import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider} from "../../providers/auth-service/auth-service";

/**
 * Generated class for the HeartRatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-heart-rate',
  templateUrl: 'heart-rate.html',
})
export class HeartRatePage {
  item;
  value;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private auth: AuthServiceProvider) {
    this.item = this.navParams.data.item;
    console.log(this.item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeartRatePage');
  }
  saveinfo(){
    this.auth.currentUserInfo[this.item.name].shift();
    this.auth.currentUserInfo[this.item.name].push(this.value);
    this.navCtrl.pop();
  }
  cancelAdd() {
    this.navCtrl.pop();
  }
}
