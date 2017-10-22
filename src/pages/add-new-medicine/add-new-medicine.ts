import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {  MedicineInfo } from "../../providers/auth-service/Info";

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
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private auth: AuthServiceProvider,
              private alertCtrl: AlertController) {

    this.medicine = this.navParams.data.medicine;
    this.medicine.timeList = new Array();
    console.log(this.auth.userInfo);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewMedicinePage');
  }
  addMed(){
    if (this.checkRepeat()&&this.checkConflict()) {
      this.auth.currentUserInfo.medicineList.push(this.medicine);
      this.auth.update();
      this.navCtrl.pop();
    } else if(!this.checkRepeat()){
      let alert = this.alertCtrl.create({
        title: 'Fail',
        message: "You have added it",
        buttons: ['OK']
      });
      alert.present();
    } else if(!this.checkConflict()){
      let alert = this.alertCtrl.create({
        title: 'Fail',
        message: "Conflict with your current medicines",
        buttons: ['OK']
      });
      alert.present();
    }

  }
  cancelAdd() {
    this.navCtrl.pop();
  }
  checkRepeat(): boolean{
    let allow: boolean = true;
    this.auth.currentUserInfo.medicineList.forEach(
      x => { if (x.barcode === this.medicine.barcode) allow = false;});
    return allow;
  }

  /**
   * check if the medicine conflict
   * @returns {boolean}
   */
  checkConflict(): boolean {
    let allow: boolean = true;
    this.medicine.conflictList.forEach(
      listCode => {
        this.auth.userInfo.medicineList.forEach(
          medicine =>{
            if(listCode===medicine.barcode) allow = false;
          });
    });
    return allow;
  }
}
