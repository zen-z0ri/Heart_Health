import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { BloodPressure } from "../../providers/auth-service/Info";

@IonicPage()
@Component({
  selector: 'page-blood-preasure',
  templateUrl: 'blood-preasure.html',
})
export class BloodPreasurePage {

  private item;
  private bp: BloodPressure;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private auth: AuthServiceProvider) {
    this.bp = new BloodPressure(0,0);
    this.item = this.navParams.data.item;
  }

  ionViewDidLoad() { console.log('ionViewDidLoad BloodPreasurePage');}

  // Button funcion to save the input Info
  private saveInfo(): void{
    this.auth.currentUserInfo[this.item.name].shift();
    this.auth.currentUserInfo[this.item.name].push(this.bp);
    this.auth.update();
    this.navCtrl.pop();
  }

  // Button function to cancel the info
  private cancelInfo(): void {
    this.navCtrl.pop();
  }

}
