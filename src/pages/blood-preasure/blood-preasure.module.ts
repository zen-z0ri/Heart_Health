import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BloodPreasurePage } from './blood-preasure';

@NgModule({
  declarations: [
    BloodPreasurePage,
  ],
  imports: [
    IonicPageModule.forChild(BloodPreasurePage),
  ],
})
export class BloodPreasurePageModule {}
