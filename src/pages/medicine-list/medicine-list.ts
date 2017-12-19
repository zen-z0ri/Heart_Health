import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MedicineDetailPage } from "../medicine-detail/medicine-detail";
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { MedicineInfo } from "../../providers/auth-service/Info";
import { LocalNotifications } from "@ionic-native/local-notifications";

@IonicPage()
@Component({
  selector: 'page-medicine-list',
  templateUrl: 'medicine-list.html',
})
export class MedicineListPage {

  medicines:  Array<MedicineInfo>;
  constructor(public nav: NavController,
              private auth: AuthServiceProvider,
              private localNotifications: LocalNotifications) {
    this.medicines = auth.currentUserInfo.medicineList;

  }

  openNavDetailsPage(medicine, idx) {
    this.nav.push(MedicineDetailPage, { medicine: medicine, idx: idx });

  }
  deleteMed(idx){
    this.auth.currentUserInfo.medicineList.splice(idx,1);
    this.auth.update();
  }
  private getOut(): void{
    this.refreshAlarm();
    this.nav.pop();
  }
  private refreshAlarm(): void{
    this.localNotifications.cancelAll();
    let date = new Date();
    let schedule_option={id : 0,
      text: "",
      at: date,
      sound: 'file://assets/audio/alarm.wav'};
    let schedules = new Array();
    let today = new Date().toISOString();
    let id = 1;
    this.auth.currentUserInfo.medicineList.forEach(med => {
      if (med.timeList!=undefined)
        med.timeList.forEach( time => {
          schedule_option.id = id;
          id++;
          let atStr = today.replace(/T.{5}/,"T"+time);
          schedule_option.text = med.medName +atStr;
          schedule_option.at = new Date(atStr);
          schedules.push(schedule_option);
        })
    });
    this.localNotifications.schedule(schedules);
  }

}
