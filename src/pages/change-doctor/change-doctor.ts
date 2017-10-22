import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider} from "../../providers/auth-service/auth-service";
import { Doctor} from "../../providers/auth-service/Info";

/**
 * Generated class for the ChangeDoctorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-doctor',
  templateUrl: 'change-doctor.html',
})
export class ChangeDoctorPage {
  Doctor: Doctor;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private auth: AuthServiceProvider) {
    this.Doctor = auth.currentUserInfo.doctor;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeDoctorPage');
  }
  update(){
    this.auth.currentUserInfo.doctor = this.Doctor;
    this.auth.update();
    this.navCtrl.pop();
  }
  cancelAdd() {
    this.navCtrl.pop();
  }

}
