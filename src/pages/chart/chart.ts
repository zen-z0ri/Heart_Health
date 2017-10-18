import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider} from "../../providers/auth-service/auth-service";
import { Chart } from 'chart.js';

/**
 * Generated class for the ChartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html',
})
export class ChartPage {

  Emotion;
  BP;
  heart_rate;
  bmi;
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider) {
    this.Emotion = auth.currentUserInfo.Emotion;
    this.BP = auth.currentUserInfo.BP;
    this.bmi = auth.currentUserInfo.bmi;
    this.heart_rate = auth.currentUserInfo.heart_rate;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartPage');
  }

}
