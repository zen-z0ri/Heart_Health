import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HeartRatePage} from "../heart-rate/heart-rate";
import { AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {BloodPreasurePage} from "../blood-preasure/blood-preasure";
import { CallNumber } from '@ionic-native/call-number';
import { ChartPage} from "../chart/chart";
import { ChangeDoctorPage} from "../change-doctor/change-doctor";

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
    this.nav.push(ChangeDoctorPage);
  }

  openNavDetailsPage(item) {
    this.nav.push(HeartRatePage, { item: item });
  }
  openBPDetailsPage(item) {
    this.nav.push(BloodPreasurePage, { item: item });
  }
  goChart(){
    this.nav.push(ChartPage);
  }
}

