import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DoctorGetPage} from "../doctor-get/doctor-get";
import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult} from "@ionic-native/barcode-scanner";
import { Http} from "@angular/http";

/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  qr_result: BarcodeScanResult;
  constructor(public navCtrl: NavController,
      private barcodeScanner: BarcodeScanner,
      private http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }
  // async scanBarcode(){
  //   this.qr_result = await this.barcodeScanner.scan();
  //   await this.http.get(this.Auth.API_URL+'patient?barcode='+this.bar_results.text)
  //     .toPromise().then(res => this.medicine = res.json());
  //   await this.navCtrl.push(AddNewMedicinePage, { medicine: this.medicine[0] });
  // }


}
