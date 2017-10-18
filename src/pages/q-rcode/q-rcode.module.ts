import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QRcodePage } from './q-rcode';

@NgModule({
  declarations: [
    QRcodePage,
  ],
  imports: [
    IonicPageModule.forChild(QRcodePage),
  ],
})
export class QRcodePageModule {}
