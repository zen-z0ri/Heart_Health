import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HeartRatePage} from "../heart-rate/heart-rate";

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

  constructor(public nav: NavController) {
    this.items = [
      {
        'title': 'Heart Rate',
        'iconN': 'heart',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#E63135'
      },
      {
        'title': 'BMI',
        'iconN': 'body',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': '#0CA9EA'
      },
      {
        'title': 'Blood Pressure',
        'iconN': 'stats',
        'description': 'The latest version of the web\'s markup language.',
        'color': '#F46529'
      },
      {
        'title': 'Emotion',
        'iconN': 'happy',
        'description': 'One of the most popular programming languages on the Web!',
        'color': '#FFD439'
      },

    ]
  }

  openNavDetailsPage(item) {
    this.nav.push(HeartRatePage, { item: item });
  }

}
