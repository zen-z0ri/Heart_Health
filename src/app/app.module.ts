import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

import { HeartLink } from './app.component';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { MedicinePage} from "../pages/medicine/medicine";
import { ProfilePage} from "../pages/profile/profile";
import { SettingPage} from "../pages/setting/setting";
import { SplashPage} from "../pages/splash/splash";

@NgModule({
  declarations: [
    HeartLink,
    MedicinePage,
    ProfilePage,
    SettingPage,
    SplashPage,
  ],
  imports: [
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
