import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider} from "../../providers/auth-service/auth-service";
import { Info, MedicineInfo, User, Doctor, BloodPressure } from "../../providers/auth-service/Info";

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
  medicine: MedicineInfo;
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider) {
    this.medicine = this.navParams.data.medicine;
    this.medicine.timeList = new Array();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewMedicinePage');
  }
  addMed(){
    this.auth.currentUserInfo.medicineList.push(this.medicine);
    this.navCtrl.pop();
  }
  cancelAdd() {
    this.navCtrl.pop();
  }

}
