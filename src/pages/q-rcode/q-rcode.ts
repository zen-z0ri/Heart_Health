import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult} from "@ionic-native/barcode-scanner";
import { AuthServiceProvider} from "../../providers/auth-service/auth-service";

/**
 * Generated class for the QRcodePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-q-rcode',
  templateUrl: 'q-rcode.html',
})
export class QRcodePage {
  result: {};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private auth: AuthServiceProvider,
              private barcode: BarcodeScanner) {
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad QRcodePage');
  }

  async showQR(){
    console.log()
    // const result = await this.barcode.encode(this.barcode.Encode.TEXT_TYPE, this.auth.currentUserInfo._id );
    this.barcode.encode(this.barcode.Encode.TEXT_TYPE, this.auth.currentUserInfo._id).then((encodedData) => {
      console.log(encodedData);
      this.result = encodedData;
    }, (err) => {
      console.log("Error occured : " + err);
    });
  }

}
