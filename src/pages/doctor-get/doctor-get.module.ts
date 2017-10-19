import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctorGetPage } from './doctor-get';

@NgModule({
  declarations: [
    DoctorGetPage,
  ],
  imports: [
    IonicPageModule.forChild(DoctorGetPage),
  ],
})
export class DoctorGetPageModule {}
