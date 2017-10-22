import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MedicineDetailPage} from "../medicine-detail/medicine-detail";
import { AuthServiceProvider} from "../../providers/auth-service/auth-service";
import { MedicineInfo} from "../../providers/auth-service/Info";

import { LocalNotifications} from "@ionic-native/local-notifications";

/**
 * Generated class for the MedicineListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medicine-list',
  templateUrl: 'medicine-list.html',
})
export class MedicineListPage {

  medicines:  Array<MedicineInfo>;
  constructor(public nav: NavController, private auth: AuthServiceProvider, private localNotifications: LocalNotifications) {
    this.medicines = auth.currentUserInfo.medicineList;
    // this.setAlarm();
  }

  openNavDetailsPage(medicine, idx) {
    this.nav.push(MedicineDetailPage, { medicine: medicine, idx: idx });
    // this.setAlarm();
  }
  deleteMed(idx){
    this.auth.currentUserInfo.medicineList.splice(idx,1);
    this.auth.update();
  }
  private getOut(): void{
    this.nav.pop();
  }
  //
  // setAlarm(){
  //   this.localNotifications.cancelAll();
  //   this.medicines.forEach(med =>{
  //     med.timeList.forEach( time =>{
  //       this.localNotifications.schedule({
  //         title: 'Take Medicine',
  //         text: 'Take: '+med.medName,
  //         at: new Date(new Date().getTime() + 5 * 1000)
  //       });
  //     });
  //   });
  // }

}
