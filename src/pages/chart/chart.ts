import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider} from "../../providers/auth-service/auth-service";
import { Chart } from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html',
})
export class ChartPage {
  // set the view child and the declare the element see at
  // https://github.com/chartjs/Chart.js
  @ViewChild('Emotion')     Emotion;
  @ViewChild('BP')          BP;
  @ViewChild('heart_rate')  heart_rate;
  @ViewChild('bmi')         bmi;
  private heartRateChartEl:  any;
  private emotionChartEl:    any;
  private bmiChartEl:        any;
  private BPChartEL:         any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private auth: AuthServiceProvider) {
    console.log(auth.currentUserInfo);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartPage');
    this.createEmotion();
    this.createHaertRate();
    this.createBMI();
    this.createBP();
  }

  private createHaertRate(): void{
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

  private createBP(): void{
    let highPressure: Array<number> = new Array();
    let lowPressure: Array<number> = new Array();
    let max = Math.max(...highPressure);
    let min = Math.min(...lowPressure);
    this.auth.currentUserInfo.BP.forEach(ele => {
      lowPressure.push(ele["high_pressure"]);
      highPressure.push(ele["low_pressure"]);
    });
    this.BPChartEL = new Chart(this.BP.nativeElement,
      {
        type: 'line',
        data: {
          labels: ["-6", "-5", "-4", "-3", "-2", "-1", "0"],
          datasets:[{
            label: "Systolic Blood Pressure",
            borderColor: '#F46529',
            fill: true,
            fillColor : "rgba(220,220,220,0.5)",
            data: highPressure
          }, {
            label: "Diastolic Blood Pressure",
            borderColor: '#00a826',
            fill: true,
            fillColor : "rgba(101,73,156,0.5)",
            data: lowPressure
          }]
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

  private createBMI(): void{
    let max = Math.max(...this.auth.currentUserInfo.bmi);
    console.log(max);

    let min = Math.min(...this.auth.currentUserInfo.bmi);
    console.log(min);
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
            data: this.auth.currentUserInfo.bmi
            // data:  [ 22.2, 22.2, 22.3, 22.4, 22.5, 22.5 ]
          }]
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
                suggestedMax: max+0.1,
                suggestedMin: min-0.1,
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

  private createEmotion(): void{
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
