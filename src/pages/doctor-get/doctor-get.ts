import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { Info} from "../../providers/auth-service/Info";

@IonicPage()
@Component({
  selector: 'page-doctor-get',
  templateUrl: 'doctor-get.html',
})
export class DoctorGetPage {

  private score: [number];
  private info: Info;
  // chart.js data
  @ViewChild('Health') Health;
  private HealthEL: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.info = navParams.data.info;
    console.log(this.info);
    this.getScore()
  }

  // Add algorithm to score the health status of user
  private getScore(): void{
    this.score = [4, 4, 4, 4 ,4];
    for (let i in this.score){
      this.score[i] = this.score[i]+ Math.round(Math.random() * 6);
    }
  }

  private showHealthScore(): void{
    this.HealthEL = new Chart(this.Health.nativeElement,{
      type: 'radar',
      data: {
        labels: ["Heart Rate", "Blood Pressure", "Emotion", "BMI", "Medicine Take"],
        datasets: [{
          borderColor:"#E63135",
          backgroundColor: "rgba(220,220,220,0.5)",
          data: this.score
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
    this.showHealthScore();
    console.log('ionViewDidLoad DoctorGetPage');
  }

}
