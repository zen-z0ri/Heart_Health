import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider} from "../../providers/auth-service/auth-service";

@IonicPage()
@Component({
  selector: 'page-heart-rate',
  templateUrl: 'heart-rate.html',
})
export class HeartRatePage {
  private item;
  private value: number;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private auth: AuthServiceProvider) {
    this.item = this.navParams.data.item;
    console.log(this.item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeartRatePage');
  }

  /**
   * Save the info to the data base
   */
  private saveinfo(): void{
    this.auth.currentUserInfo[this.item.name].shift();
    this.auth.currentUserInfo[this.item.name].push(this.value);
    this.auth.update();
    this.navCtrl.pop();
  }

  private cancelAdd(): void{
    this.navCtrl.pop();
  }
}
