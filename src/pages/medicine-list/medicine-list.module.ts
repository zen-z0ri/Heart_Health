import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicineListPage } from './medicine-list';

@NgModule({
  declarations: [
    MedicineListPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicineListPage),
  ],
})
export class MedicineListPageModule {}
