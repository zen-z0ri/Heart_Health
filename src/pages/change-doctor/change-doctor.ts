import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider} from "../../providers/auth-service/auth-service";
import { Doctor} from "../../providers/auth-service/Info";

@IonicPage()
@Component({
  selector: 'page-change-doctor',
  templateUrl: 'change-doctor.html',
})
export class ChangeDoctorPage {
  private Doctor: Doctor;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private auth: AuthServiceProvider) {
    this.Doctor = auth.currentUserInfo.doctor;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeDoctorPage');
  }
  // Button function to update doctor change
  private updateDr(): void{
    this.auth.currentUserInfo.doctor = this.Doctor;
    this.auth.update();
    this.navCtrl.pop();
  }
  //Button function to cancel
  private cancelUpdateDr(): void {
    this.navCtrl.pop();
  }

}
