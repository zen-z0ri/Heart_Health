import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNewMedicinePage } from './add-new-medicine';

@NgModule({
  declarations: [
    AddNewMedicinePage,
  ],
  imports: [
    IonicPageModule.forChild(AddNewMedicinePage),
  ],
})
export class AddNewMedicinePageModule {}
