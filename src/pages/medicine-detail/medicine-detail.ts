import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events} from 'ionic-angular';
import { MedicineListPage } from "../medicine-list/medicine-list";
import { AuthServiceProvider} from "../../providers/auth-service/auth-service";
import { MedicineInfo} from "../../providers/auth-service/Info";
import { Location }                 from '@angular/common';
import { LocalNotifications} from "@ionic-native/local-notifications";
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
  Alarms: Array<string> = new Array();
  medicine: MedicineInfo;
  idx: number;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private auth: AuthServiceProvider,
              private localNotifications: LocalNotifications,
              public events: Events,) {

    this.medicine = this.navParams.data.medicine;
    this.idx = this.navParams.data.idx;
    this.Alarms = this.medicine.timeList;
    console.log(this.medicine);
    this.medicine.timeList = this.Alarms;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicineDetailPage');
  }

  private addAlarm(): void{
    this.Alarms.push('07:30');
    this.save();
  }

  private save(): void{
    this.auth.currentUserInfo.medicineList[this.idx] = this.medicine;
    console.log(this.auth.currentUserInfo);
    this.events.publish("shareObject", this.medicine);
  
  }
  private delete(idx): void{
    this.Alarms.splice(idx,1);
    this.save();
  }
  private getOut(): void{
    this.save();
    this.navCtrl.pop();
  }
}
