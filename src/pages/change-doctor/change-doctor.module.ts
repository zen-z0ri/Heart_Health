import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangeDoctorPage } from './change-doctor';

@NgModule({
  declarations: [
    ChangeDoctorPage,
  ],
  imports: [
    IonicPageModule.forChild(ChangeDoctorPage),
  ],
})
export class ChangeDoctorPageModule {}
