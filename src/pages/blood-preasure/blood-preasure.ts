import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.data.item;
  }

  ionViewDidLoad() {

  }

  cancelAdd() {
    this.navCtrl.pop();
  }

}
