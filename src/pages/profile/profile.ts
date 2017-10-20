import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HeartRatePage} from "../heart-rate/heart-rate";
import { AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {BloodPreasurePage} from "../blood-preasure/blood-preasure";
import { Doctor} from "../../providers/auth-service/Info";
import { CallNumber } from '@ionic-native/call-number';
/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {


  items = [];
  bp;
  constructor(public nav: NavController,
              private auth: AuthServiceProvider,
              private callNumber: CallNumber ) {
    this.items = [
      {
        'title': 'Heart Rate',
        'iconN': 'heart',
        'color': '#E63135',
        'name': 'heart_rate'
      },
      {
        'title': 'BMI',
        'iconN': 'body',
        'color': '#0CA9EA',
        'name': 'bmi'
      },

      {
        'title': 'Emotion',
        'iconN': 'happy',
        'color': '#FFD439',
        'name': 'Emotion'
      },
    ];
    this.bp = {
      'title': 'Blood Pressure',
      'iconN': 'stats',
      'color': '#F46529',
      'name': 'BP'
    };
  }
  makeCall(){
    this.callNumber.callNumber(this.auth.currentUserInfo.doctor.phoneNumber.toString(), true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }
  resetPhone(){

  }

  openNavDetailsPage(item) {
    this.nav.push(HeartRatePage, { item: item });
  }
  openBPDetailsPage(item) {
    this.nav.push(BloodPreasurePage, { item: item });
  }
}

