import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult} from "@ionic-native/barcode-scanner";
import { AuthServiceProvider} from "../../providers/auth-service/auth-service";
import { MedicineListPage} from "../medicine-list/medicine-list";
import { Http, Headers} from "@angular/http";

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
  newMed: any;
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
    await this.http.get(this.thisAuth.API_URL+'search?'+this.bar_results)
      .map(res => res.json()).subscribe(data => {this.newMed = data});

    await console.log(this.newMed.toString());

  }
  showMedcines(e){
    this.navCtrl.push(MedicineListPage);
  }

}
