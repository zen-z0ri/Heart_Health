import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult} from "@ionic-native/barcode-scanner";
import { AuthServiceProvider} from "../../providers/auth-service/auth-service";
import { MedicineListPage} from "../medicine-list/medicine-list";
import { Http} from "@angular/http";
import { AddNewMedicinePage} from "../add-new-medicine/add-new-medicine";

import 'rxjs/add/operator/toPromise';
import { ChartPage } from "../chart/chart";
import { QRcodePage } from "../q-rcode/q-rcode";

/**
 * Generated class for the MedicinePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medicine',
  templateUrl: 'medicine.html',
})

export class MedicinePage {
  options: BarcodeScannerOptions;
  bar_results: BarcodeScanResult;
  medicine: any;
  thisAuth: any;
  constructor(public navCtrl: NavController,
              private barcodeScanner: BarcodeScanner,
              private alertCtrl: AlertController,
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
  showMedcines(e){
    this.navCtrl.push(MedicineListPage);
  }
  showChart(){
    this.navCtrl.push(ChartPage);
  }
  qrcode(){
    this.navCtrl.push(QRcodePage);
  }
}
