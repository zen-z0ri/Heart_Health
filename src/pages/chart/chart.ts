import { Component, ViewChild } from '@angular/core';
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
  @ViewChild('Emotion') Emotion;
  @ViewChild('BP') BP;
  @ViewChild('heart_rate') heart_rate;
  @ViewChild('bmi') bmi;
  public heartRateChartEl:      any;
  public emotionChartEl:        any;
  public bmiChartEl:            any;
  public BPChartEL:             any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider) {
    this.Emotion = auth.currentUserInfo.Emotion;
    this.BP = auth.currentUserInfo.BP;
    this.bmi = auth.currentUserInfo.bmi;
    this.heart_rate = auth.currentUserInfo.heart_rate;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartPage');
    this.createEmotion();
    this.createHaertRate();
    this.createBMI();
    this.createBP();
  }
  createHaertRate() {
    let max = Math.max(...this.auth.currentUserInfo.heart_rate);
    let min = Math.min(...this.auth.currentUserInfo.heart_rate);
    this.heartRateChartEl = new Chart(this.heart_rate.nativeElement,
      {
        type: 'line',
        data: {
          labels: ["-6", "-5", "-4", "-3", "-2", "-1", "0"],
          datasets:[{
            label: "Heart rate for last 7 updates",
            borderColor: "#E63135",
            fill: true,
            fillColor : "rgba(220,220,220,0.5)",
            data: this.auth.currentUserInfo.heart_rate}]
        },
        options : {
          legend: {
            display: false
          },
          responsive: true,
          title:{
            display:false,
          },
          tooltips: {
            mode: 'index',
            intersect: false,
          },
          hover: {
            mode: 'nearest',
            intersect: true
          },
          scales: {
            yAxes: [{
              display: true,
              ticks: {
                suggestedMax: max+3,
                suggestedMin: min-3,
              }
            }],
            xAxes: [{
              display: true,
              ticks: {
                autoSkip: false
              }
            }]
          }
        }
      });
  }
  createBP(){
    let highPressure: [number];
    let lowPressure: [number];
    this.auth.currentUserInfo.BP.forEach(ele => {
      let res = ele.split(":");
      lowPressure.push(res[0]);
      highPressure.push(res[1]);
    });
  }
  createBMI() {
    let max = Math.max(...this.auth.currentUserInfo.bmi);
    let min = Math.min(...this.auth.currentUserInfo.bmi);
    this.bmiChartEl = new Chart(this.bmi.nativeElement,
      {
        type: 'line',
        data: {
          labels: ["-6", "-5", "-4", "-3", "-2", "-1", "0"],
          datasets:[{
            label: "BMI for last 7 updates",
            borderColor: '#0CA9EA',
            fill: true,
            fillColor : "rgba(220,220,220,0.5)",
            data: this.auth.currentUserInfo.Emotion}]
        },
        options : {
          legend: {
            display: false
          },
          responsive: true,
          title:{
            display:false,
          },
          tooltips: {
            mode: 'index',
            intersect: false,
          },
          hover: {
            mode: 'nearest',
            intersect: true
          },
          scales: {
            yAxes: [{
              display: true,
              ticks: {
                suggestedMax: max+1,
                suggestedMin: min-1,
              }
            }],
            xAxes: [{
              display: true,
              ticks: {
                autoSkip: false
              }
            }]
          }
        }
      });
  }
  createEmotion() {
    let max = Math.max(...this.auth.currentUserInfo.Emotion);
    let min = Math.min(...this.auth.currentUserInfo.Emotion);
    this.emotionChartEl = new Chart(this.Emotion.nativeElement,
      {
        type: 'line',
        data: {
          labels: ["-6", "-5", "-4", "-3", "-2", "-1", "0"],
          datasets:[{
            label: "Emotion score for last 7 updates",
            borderColor: '#FFD439',
            fill: true,
            fillColor : "rgba(220,220,220,0.5)",
            data: this.auth.currentUserInfo.Emotion}]
        },
        options : {
          legend: {
            display: false
          },
          responsive: true,
          title:{
            display:false,
          },
          tooltips: {
            mode: 'index',
            intersect: false,
          },
          hover: {
            mode: 'nearest',
            intersect: true
          },
          scales: {
            yAxes: [{
              display: true,
              ticks: {
                suggestedMax: max+1,
                suggestedMin: min-1,
              }
            }],
            xAxes: [{
              display: true,
              ticks: {
                autoSkip: false
              }
            }]
          }
        }
      });
  }

}
