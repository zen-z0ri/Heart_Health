import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddNewMedicinePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-new-medicine',
  templateUrl: 'add-new-medicine.html',
})
export class AddNewMedicinePage {
  medicine: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.medicine = this.navParams.data.medicine;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewMedicinePage');
  }
  cancelAdd() {
    this.navCtrl.pop();
  }

}
