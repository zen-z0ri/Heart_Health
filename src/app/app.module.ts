import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { HttpModule} from '@angular/http';
import { CallNumber} from "@ionic-native/call-number";
import { LocalNotifications } from "@ionic-native/local-notifications";

import { HeartLink } from './app.component';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { MedicinePage} from "../pages/medicine/medicine";
import { ProfilePage} from "../pages/profile/profile";
import { SettingPage} from "../pages/setting/setting";
import { SplashPage} from "../pages/splash/splash";
import { HeartRatePage} from "../pages/heart-rate/heart-rate";
import { MedicineListPage} from "../pages/medicine-list/medicine-list";
import { MedicineDetailPage} from "../pages/medicine-detail/medicine-detail";
import { AddNewMedicinePage} from "../pages/add-new-medicine/add-new-medicine";
import { BloodPreasurePage} from "../pages/blood-preasure/blood-preasure";
import { ChartPage} from "../pages/chart/chart";
import { DoctorGetPage } from "../pages/doctor-get/doctor-get";
import { ArticlePage} from "../pages/article/article";
import { UserManualPage} from "../pages/user-manual/user-manual";
import { ChangeDoctorPage} from "../pages/change-doctor/change-doctor";

@NgModule({
  declarations: [
    HeartLink,
    MedicinePage,
    ProfilePage,
    SettingPage,
    SplashPage,
    HeartRatePage,
    MedicineListPage,
    MedicineDetailPage,
    AddNewMedicinePage,
    BloodPreasurePage,
    ChartPage,
    DoctorGetPage,
    ArticlePage,
    UserManualPage,
    ChangeDoctorPage,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(HeartLink)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HeartLink,
    MedicinePage,
    ProfilePage,
    SettingPage,
    SplashPage,
    HeartRatePage,
    MedicineListPage,
    MedicineDetailPage,
    AddNewMedicinePage,
    BloodPreasurePage,
    ChartPage,
    DoctorGetPage,
    ArticlePage,
    UserManualPage,
    ChangeDoctorPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    BarcodeScanner,
    CallNumber,
    LocalNotifications,
  ]
})
export class AppModule {}
