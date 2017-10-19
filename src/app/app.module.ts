import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { HttpModule} from '@angular/http';


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
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    BarcodeScanner,
  ]
})
export class AppModule {}
