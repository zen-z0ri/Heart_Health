import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {  MedicineInfo } from "../../providers/auth-service/Info";

@IonicPage()
@Component({
  selector: 'page-add-new-medicine',
  templateUrl: 'add-new-medicine.html',
})
export class AddNewMedicinePage {
  private medicine: MedicineInfo;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private auth: AuthServiceProvider,
              private alertCtrl: AlertController) {
    this.medicine = this.navParams.data.medicine;
    this.medicine.timeList = new Array();
  }

  ionViewDidLoad() { console.log('ionViewDidLoad AddNewMedicinePage'); }

  /**
   * Button funtion to add the medicine to the medicine list
   */
  private addMedicine(): void{
    /**
     * check the medicine if have been in the medicine list,
     * or conflict with the exist medicine
     */
    if (this.checkRepeat() && this.checkConflict()) {
      //success updaate
      this.auth.currentUserInfo.medicineList.push(this.medicine);
      this.auth.update();
      this.navCtrl.pop();
    } else if(!this.checkRepeat()){
      // Repeat
      let alert = this.alertCtrl.create({
        title: 'Fail',
        message: "You have added it",
        buttons: ['OK']
      });
      alert.present();
    } else if(!this.checkConflict()){
      // Conflict
      let alert = this.alertCtrl.create({
        title: 'Fail',
        message: "Conflict with your current medicines",
        buttons: ['OK']
      });
      alert.present();
    }
  }

  /**
   * Button function to cancel sure add
   */
  private cancelAdd(): void {
    this.navCtrl.pop();
  }

  /**
   * check if the medicine repeat with exsit one
   * @returns {boolean}
   */
  private checkRepeat(): boolean{
    let allow: boolean = true;
    this.auth.currentUserInfo.medicineList.forEach(
      x => { if (x.barcode === this.medicine.barcode) allow = false;});
    return allow;
  }

  /**
   * check if the medicine conflict
   * @returns {boolean}
   */
  private checkConflict(): boolean {
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
