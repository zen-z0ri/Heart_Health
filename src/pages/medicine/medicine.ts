import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult} from "@ionic-native/barcode-scanner";

import { MedicineListPage} from "../medicine-list/medicine-list";

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
  results: BarcodeScanResult;
  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner, private alertCtrl: AlertController,) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicinePage');
  }
  async scanBarcode(){
    this.results = await this.barcodeScanner.scan();
    console.log(this.results);
  }
  showMedcines(e){
    this.navCtrl.push(MedicineListPage);
  }

}
