import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicineDetailPage } from './medicine-detail';

@NgModule({
  declarations: [
    MedicineDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicineDetailPage),
  ],
})
export class MedicineDetailPageModule {}
