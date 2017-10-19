import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MedicineDetailPage} from "../medicine-detail/medicine-detail";
import { AuthServiceProvider} from "../../providers/auth-service/auth-service";
import { MedicineInfo} from "../../providers/auth-service/Info";
import { Location }                 from '@angular/common';
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

  medicines:  [MedicineInfo];
  constructor(public nav: NavController, private auth: AuthServiceProvider, private location: Location,) {
    this.medicines = auth.currentUserInfo.medicineList;
  }

  openNavDetailsPage(medicine, idx) {
    this.nav.push(MedicineDetailPage, { medicine: medicine, idx: idx });
  }
}
