import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeartRatePage } from './heart-rate';

@NgModule({
  declarations: [
    HeartRatePage,
  ],
  imports: [
    IonicPageModule.forChild(HeartRatePage),
  ],
})
export class HeartRatePageModule {}
