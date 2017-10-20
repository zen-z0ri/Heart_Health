import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserManualPage } from './user-manual';

@NgModule({
  declarations: [
    UserManualPage,
  ],
  imports: [
    IonicPageModule.forChild(UserManualPage),
  ],
})
export class UserManualPageModule {}
