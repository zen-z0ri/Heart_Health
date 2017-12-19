import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult} from "@ionic-native/barcode-scanner";
import { AuthServiceProvider} from "../../providers/auth-service/auth-service";
import { MedicineListPage} from "../medicine-list/medicine-list";
import { Http} from "@angular/http";
import { AddNewMedicinePage} from "../add-new-medicine/add-new-medicine";

import 'rxjs/add/operator/toPromise';
import { ChartPage } from "../chart/chart";
import { ArticlePage} from "../article/article";
import { UserManualPage} from "../user-manual/user-manual";

@IonicPage()
@Component({
  selector: 'page-medicine',
  templateUrl: 'medicine.html',
})

export class MedicinePage {
  options: BarcodeScannerOptions;
  bar_results: BarcodeScanResult;
  result:{};
  medicine: any;
  thisAuth: any;
  constructor(public navCtrl: NavController,
              private barcodeScanner: BarcodeScanner,
              private auth: AuthServiceProvider,
              private http:Http) {
    this.thisAuth = auth;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicinePage');
  }
  async scanBarcode(){
    this.bar_results = await this.barcodeScanner.scan();
    await this.http.get(this.thisAuth.API_URL+'medicine?barcode='+this.bar_results.text)
                    .toPromise().then(res => this.medicine = res.json());
    await this.navCtrl.push(AddNewMedicinePage, { medicine: this.medicine[0] });
  }
  showMedcines(){
    this.navCtrl.push(MedicineListPage);
  }
  showChart(){
    this.navCtrl.push(ChartPage);
  }

  /**
   * 1. request server make a toke -->
   * 2. recieve the toke to create the qr code -->
   * 3. doctor scan the token and use it to generate data
   * @returns {Promise<void>}
   */
  async qrCode() {
    let code;
    await this.http.get(this.auth.API_URL+'token?name='
      +this.auth.currentUserInfo.user.name)
      .toPromise()
      .then(res => {code=res.json(); console.log(code)});
    await this.barcodeScanner
      .encode(this.barcodeScanner.Encode.TEXT_TYPE, code).then((encodedData) => {
      console.log(encodedData);
      this.result = encodedData;
    }, (err) => {
      console.log("Error occured : " + err);
    });
  }
  showTips(){
    this.navCtrl.push(ArticlePage);
  }
  showInfo(){
    this.navCtrl.push(UserManualPage);
  }
}
