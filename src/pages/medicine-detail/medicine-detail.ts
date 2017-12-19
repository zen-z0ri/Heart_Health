import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events} from 'ionic-angular';
import { AuthServiceProvider} from "../../providers/auth-service/auth-service";
import { MedicineInfo} from "../../providers/auth-service/Info";
import { LocalNotifications} from "@ionic-native/local-notifications";

@IonicPage()
@Component({
  selector: 'page-medicine-detail',
  templateUrl: 'medicine-detail.html',
})
export class MedicineDetailPage {
  Alarms: Array<string>;
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
    if (!this.Alarms) this.Alarms = new Array();
    console.log(this.medicine);
    this.medicine.timeList = this.Alarms;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicineDetailPage');
  }
  /**
   * add an alarm
   */
  private addAlarm(): void{
    this.Alarms.push('07:30');
    this.save();
  }
  /**
   * save the schedule to the db
   */
  private save(): void{
    this.auth.currentUserInfo.medicineList[this.idx] = this.medicine;

  }
  /**
   * delete an alarm
   * @param idx alarm index
   */
  private delete(idx): void{
    this.Alarms.splice(idx,1);
    this.save();
  }
  private getOut(): void{
    this.save();
    this.navCtrl.pop();
  }
}
