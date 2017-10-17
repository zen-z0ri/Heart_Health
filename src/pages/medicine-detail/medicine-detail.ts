import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MedicineListPage } from "../medicine-list/medicine-list";

/**
 * Generated class for the MedicineDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medicine-detail',
  templateUrl: 'medicine-detail.html',
})
export class MedicineDetailPage {

  Alarms: [string] = ['07:30'];

  theMedic: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.theMedic = this.navParams.data.medicine;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicineDetailPage');
  }

  private addAlarm(): void{
    this.Alarms.push('07:30');
  }

}
