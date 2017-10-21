import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider} from "../../providers/auth-service/auth-service";
import { BloodPressure} from "../../providers/auth-service/Info";

/**
 * Generated class for the BloodPreasurePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blood-preasure',
  templateUrl: 'blood-preasure.html',
})
export class BloodPreasurePage {

  item;
  bp: BloodPressure;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private auth: AuthServiceProvider) {
    this.bp = new BloodPressure(0,0);
    this.item = this.navParams.data.item;
  }

  ionViewDidLoad() {

  }

  saveinfo(){
    this.auth.currentUserInfo[this.item.name].shift();
    this.auth.currentUserInfo[this.item.name].push(this.bp);
    this.navCtrl.pop();
  }

  cancelAdd() {
    this.navCtrl.pop();
  }

}
