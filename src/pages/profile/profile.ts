import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HeartRatePage} from "../heart-rate/heart-rate";
import { AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {BloodPreasurePage} from "../blood-preasure/blood-preasure";

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

  constructor(public nav: NavController, public auth: AuthServiceProvider) {
    this.items = [
      {
        'title': 'Heart Rate',
        'iconN': 'heart',
        'color': '#E63135'
      },
      {
        'title': 'BMI',
        'iconN': 'body',
        'color': '#0CA9EA'
      },

      {
        'title': 'Emotion',
        'iconN': 'happy',
        'color': '#FFD439'
      },
    ];
    this.bp = {
      'title': 'Blood Pressure',
      'iconN': 'stats',
      'color': '#F46529'
    };
  }

  openNavDetailsPage(item) {
    this.nav.push(HeartRatePage, { item: item });
  }
  openBPDetailsPage(item) {
    this.nav.push(BloodPreasurePage, { item: item });
  }
}

