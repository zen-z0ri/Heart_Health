import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { Info} from "../../providers/auth-service/Info";

/**
 * Generated class for the DoctorGetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctor-get',
  templateUrl: 'doctor-get.html',
})
export class DoctorGetPage {
  info: Info;
  @ViewChild('Health') Health;
  public HealthEL: any;
  score: [number];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.info = navParams.data.info;
    console.log(this.info);

  }

  getScore(){
    this.score = [10, 10, 10, 10 ,10];
    // this.info.BP.forEach( ele => {ele.isUndefined||ele===0})
  }
  showHealth(){
    this.HealthEL = new Chart(this.Health.nativeElement,{
      type: 'radar',
      data: {
        labels: ["Heart Rate", "Blood Pressure", "Emotion", "BMI", "Medicine Take"],
        datasets: [{
          backgroundColor: "#E63135",
          fill: true,
          fillColor : "rgba(220,220,220,0.5)",
          data: [7, 6, 6, 9 ,10]
        }]
      },
      options: {
         legend: {
          display: false
        },
        responsive: true,
        title: {
          display: false,
          text: 'Patient Healt'
        },
        scale: {
          ticks: {
            beginAtZero: true
          }
        }
      }
    });
  }
  ionViewDidLoad() {
    this.showHealth();
    console.log('ionViewDidLoad DoctorGetPage');
  }

}
