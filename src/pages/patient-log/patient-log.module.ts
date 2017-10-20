import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatientLogPage } from './patient-log';

@NgModule({
  declarations: [
    PatientLogPage,
  ],
  imports: [
    IonicPageModule.forChild(PatientLogPage),
  ],
})
export class PatientLogPageModule {}
