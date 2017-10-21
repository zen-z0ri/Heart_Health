webpackJsonp([17],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SplashPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SplashPage = /** @class */ (function () {
    function SplashPage(navCtrl, navParams, viewCtrl, splashScreen) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.splashScreen = splashScreen;
    }
    SplashPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.splashScreen.hide();
        setTimeout(function () {
            _this.viewCtrl.dismiss();
        }, 4000);
    };
    SplashPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-splash',template:/*ion-inline-start:"/home/tung/Documents/learnIonic/heart/src/pages/splash/splash.html"*/'<!--\n  Generated template for the SplashPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <svg id="bars" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.15 224.35">\n    <defs>\n      <style>.cls-1{fill:#dd238c;}.cls-2{fill:#ef4328;}.cls-3{fill:#7dd0df;}.cls-4{fill:#febf12;}.cls-5{fill:#282828;}</style>\n    </defs>\n\n    <rect class="cls-1" x="27.22" width="20.06" height="163.78"/>\n    <rect class="cls-2" y="4" width="20.06" height="163.78"/>\n    <rect class="cls-3" x="13.9" y="13.1" width="20.06" height="163.78"/>\n    <rect class="cls-4" x="43.1" y="7.45" width="20.06" height="163.78"/>\n    <path class="cls-5" d="M243.5,323a12,12,0,0,1-.5,3.43,8.88,8.88,0,0,1-1.63,3.1,8.24,8.24,0,0,1-3,2.26,10.8,10.8,0,0,1-4.58.86,9.63,9.63,0,0,1-6-1.82,8.48,8.48,0,0,1-3.07-5.47l4-.82a5.64,5.64,0,0,0,1.66,3.19,4.86,4.86,0,0,0,3.43,1.18,5.71,5.71,0,0,0,2.83-.62,4.53,4.53,0,0,0,1.7-1.63,7,7,0,0,0,.84-2.33,15.15,15.15,0,0,0,.24-2.71V297.82h4V323Z" transform="translate(-224.04 -108.31)"/>\n    <path class="cls-5" d="M252,297.82h6l11.52,26.64h0.1l11.62-26.64H287v34h-4V303.29h-0.1L270.72,331.8h-2.45l-12.19-28.51H256V331.8h-4v-34Z" transform="translate(-224.04 -108.31)"/>\n  </svg>\n\n</ion-content>\n'/*ion-inline-end:"/home/tung/Documents/learnIonic/heart/src/pages/splash/splash.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], SplashPage);
    return SplashPage;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicineDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MedicineDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MedicineDetailPage = /** @class */ (function () {
    function MedicineDetailPage(navCtrl, navParams, auth, location, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.location = location;
        this.events = events;
        this.Alarms = new Array();
        this.medicine = this.navParams.data.medicine;
        this.idx = this.navParams.data.idx;
        this.Alarms = this.medicine.timeList;
        console.log(this.medicine);
        this.medicine.timeList = this.Alarms;
    }
    MedicineDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MedicineDetailPage');
    };
    MedicineDetailPage.prototype.addAlarm = function () {
        this.Alarms.push('07:30');
        this.save();
    };
    MedicineDetailPage.prototype.save = function () {
        this.auth.currentUserInfo.medicineList[this.idx] = this.medicine;
        console.log(this.auth.currentUserInfo);
        this.events.publish("shareObject", this.medicine);
    };
    MedicineDetailPage.prototype.delete = function (idx) {
        this.Alarms.splice(idx, 1);
        this.save();
    };
    MedicineDetailPage.prototype.getOut = function () {
        this.save();
        this.navCtrl.pop();
    };
    MedicineDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-medicine-detail',template:/*ion-inline-start:"/home/tung/Documents/learnIonic/heart/src/pages/medicine-detail/medicine-detail.html"*/'<!--\n  Generated template for the MedicineDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n\n<ion-content  padding>\n  <ion-list>\n    <ion-item>\n      Name:         {{medicine.medName}}\n    </ion-item>\n    <ion-item>\n      BarCode:      {{medicine.barcode}}\n    </ion-item>\n    <ion-item>\n      Discription:  {{medicine.medInfo}}\n    </ion-item>\n  </ion-list>\n  <ion-list class="timeList">\n    <ion-label class="header">\n      Alarm time\n    </ion-label>\n\n    <ion-item *ngFor="let a of Alarms; let i=index" (press)="delete(i)">\n      <ion-label>Alarm {{i+1}}</ion-label>\n      <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="Alarms[i]"></ion-datetime>\n    </ion-item>\n\n    <button ion-button class="btn" round clear (click)="addAlarm()">\n      <ion-icon name="add-circle" class="add-alarm" itemid></ion-icon> Add Alarm\n    </button>\n    <button ion-button class="btn" [color]="red_light" full (click)="getOut()">\n      Back\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/tung/Documents/learnIonic/heart/src/pages/medicine-detail/medicine-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* Location */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], MedicineDetailPage);
    return MedicineDetailPage;
}());

//# sourceMappingURL=medicine-detail.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicineListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medicine_detail_medicine_detail__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MedicineListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MedicineListPage = /** @class */ (function () {
    function MedicineListPage(nav, auth, location) {
        this.nav = nav;
        this.auth = auth;
        this.location = location;
        this.medicines = auth.currentUserInfo.medicineList;
    }
    MedicineListPage.prototype.openNavDetailsPage = function (medicine, idx) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__medicine_detail_medicine_detail__["a" /* MedicineDetailPage */], { medicine: medicine, idx: idx });
    };
    MedicineListPage.prototype.deleteMed = function (idx) {
        this.auth.currentUserInfo.medicineList.splice(idx, 1);
    };
    MedicineListPage.prototype.getOut = function () {
        this.nav.pop();
    };
    MedicineListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-medicine-list',template:/*ion-inline-start:"/home/tung/Documents/learnIonic/heart/src/pages/medicine-list/medicine-list.html"*/'<!--\n  Generated template for the MedicineListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <!--<ion-navbar color="red_light">-->\n    <!--<ion-title>Medicine List</ion-title>-->\n  <!--</ion-navbar>-->\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header align-items-center>\n      Medicien List\n    </ion-card-header>\n\n    <ion-list>\n      <ion-item-sliding *ngFor="let medicine of medicines; let idx=index" (press)="openNavDetailsPage(medicine, idx)">\n        <button ion-item>\n          <ion-icon name="medkit" color="red_light" item-start></ion-icon>\n          {{medicine.medName}}\n          <ion-icon name="arrow-forward" item-end></ion-icon>\n        </button>\n\n        <ion-item-options side="right">\n          <button ion-button danger (click)="deleteMed(idx)" ><ion-icon name="trash"></ion-icon></button>\n        </ion-item-options>\n      </ion-item-sliding>\n\n\n    </ion-list>\n  </ion-card>\n  <button ion-button class="btn" [color]="red_light" full (click)="getOut()">\n    Back\n  </button>\n</ion-content>\n'/*ion-inline-end:"/home/tung/Documents/learnIonic/heart/src/pages/medicine-list/medicine-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["e" /* Location */]])
    ], MedicineListPage);
    return MedicineListPage;
}());

//# sourceMappingURL=medicine-list.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewMedicinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AddNewMedicinePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AddNewMedicinePage = /** @class */ (function () {
    function AddNewMedicinePage(navCtrl, navParams, auth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.medicine = this.navParams.data.medicine;
        this.medicine.timeList = new Array();
        console.log(this.auth.userInfo);
    }
    AddNewMedicinePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddNewMedicinePage');
    };
    AddNewMedicinePage.prototype.addMed = function () {
        var _this = this;
        var allow = true;
        this.auth.currentUserInfo.medicineList.forEach(function (x) { if (x.barcode === _this.medicine.barcode)
            allow = false; });
        if (allow && this.checkConflict()) {
            this.auth.currentUserInfo.medicineList.push(this.medicine);
            this.navCtrl.pop();
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Fail',
                message: "Conflict or you have added it",
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    AddNewMedicinePage.prototype.cancelAdd = function () {
        this.navCtrl.pop();
    };
    AddNewMedicinePage.prototype.checkConflict = function () {
        var _this = this;
        var allow = true;
        this.medicine.conflictList.forEach(function (listCode) {
            _this.auth.userInfo.medicineList.forEach(function (medicine) {
                if (listCode === medicine.barcode)
                    allow = false;
            });
        });
        return allow;
    };
    AddNewMedicinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-new-medicine',template:/*ion-inline-start:"/home/tung/Documents/learnIonic/heart/src/pages/add-new-medicine/add-new-medicine.html"*/'<!--\n  Generated template for the AddNewMedicinePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1 class="header"> Do you want to add this medicine to your medkit?</h1>\n  <ion-label>Name:</ion-label>\n  <ion-item>\n    {{medicine.medName}}\n  </ion-item>\n  <ion-label>BarCode:</ion-label>\n  <ion-item>\n    {{medicine.barcode}}\n  </ion-item>\n  <ion-label>Discription:</ion-label>\n  <ion-item>\n    {{medicine.medInfo}}\n  </ion-item>\n  <button ion-button class="btn" [color]="red_light" outline (click)="addMed()">\n    Add\n  </button>\n  <button ion-button class="btn" [color]="red_light" outline (click)="cancelAdd()">\n    Cancel\n  </button>\n</ion-content>\n'/*ion-inline-end:"/home/tung/Documents/learnIonic/heart/src/pages/add-new-medicine/add-new-medicine.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AddNewMedicinePage);
    return AddNewMedicinePage;
}());

//# sourceMappingURL=add-new-medicine.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ArticlePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ArticlePage = /** @class */ (function () {
    function ArticlePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ArticlePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ArticlePage');
    };
    ArticlePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-article',template:/*ion-inline-start:"/home/tung/Documents/learnIonic/heart/src/pages/article/article.html"*/'<!--\n  Generated template for the ArticlePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n</ion-header>\n\n<ion-content class="cards-bg social-cards">\n\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/doctor_yui.jpg">\n      </ion-avatar>\n      <h2>Aragaki Yui</h2>\n      <p>November 5, 2014</p>\n    </ion-item>\n\n\n    <ion-card-content>\n      <p>Cholesterol is a fatty substance carried in your blood. Your body needs cholesterol to be healthy, but an imbalance of cholesterol in your blood can lead to a heart attack or stroke. </p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'thumbs-up\'></ion-icon>\n          12 Likes\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'text\'></ion-icon>\n          4 Comments\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          11h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/doctor-img2.png">\n      </ion-avatar>\n      <h2>Dr. Akali</h2>\n      <p>May 12, 2017</p>\n    </ion-item>\n\n\n    <ion-card-content>\n      <p>Blood pressure isn’t usually something you can feel. If it’s too high, it needs to be treated. Read about blood pressure and what you can do to control high blood pressure</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'thumbs-up\'></ion-icon>\n          30 Likes\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'text\'></ion-icon>\n          64 Comments\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          30h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/doctor-img3.png">\n      </ion-avatar>\n      <h2>Masami Nagasawa</h2>\n      <p>June 28, 2017</p>\n    </ion-item>\n\n\n    <ion-card-content>\n      <p>Regular, moderate physical activity is great for your heart health. It’s never too late to start and get the benefits. It’s also important to sit less during your day and break up your sitting time. Find out what you can do about getting active and sitting less </p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'thumbs-up\'></ion-icon>\n          46 Likes\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'text\'></ion-icon>\n          66 Comments\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          2d ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/tung/Documents/learnIonic/heart/src/pages/article/article.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ArticlePage);
    return ArticlePage;
}());

//# sourceMappingURL=article.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManualPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UserManualPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UserManualPage = /** @class */ (function () {
    function UserManualPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UserManualPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserManualPage');
    };
    UserManualPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-user-manual',template:/*ion-inline-start:"/home/tung/Documents/learnIonic/heart/src/pages/user-manual/user-manual.html"*/'<!--\n  Generated template for the UserManualPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/tung/Documents/learnIonic/heart/src/pages/user-manual/user-manual.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], UserManualPage);
    return UserManualPage;
}());

//# sourceMappingURL=user-manual.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeartRatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the HeartRatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HeartRatePage = /** @class */ (function () {
    function HeartRatePage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.item = this.navParams.data.item;
        console.log(this.item);
    }
    HeartRatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HeartRatePage');
    };
    HeartRatePage.prototype.saveinfo = function () {
        this.auth.currentUserInfo[this.item.name].shift();
        this.auth.currentUserInfo[this.item.name].push(this.value);
        this.navCtrl.pop();
    };
    HeartRatePage.prototype.cancelAdd = function () {
        this.navCtrl.pop();
    };
    HeartRatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-heart-rate',template:/*ion-inline-start:"/home/tung/Documents/learnIonic/heart/src/pages/heart-rate/heart-rate.html"*/'<!--\n  Generated template for the HeartRatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>{{item.title}} Value</ion-label>\n      <ion-input type="text" value="" required ng-pattern="/\d{2,3}/" [(ngModel)]="value"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button class="btn" ion-button color="primary" block (click)="saveinfo()" >Update</button>\n    <button class="btn" ion-button color="primary" block (click)="cancelAdd()">Cancel</button>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/tung/Documents/learnIonic/heart/src/pages/heart-rate/heart-rate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], HeartRatePage);
    return HeartRatePage;
}());

//# sourceMappingURL=heart-rate.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BloodPreasurePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BloodPreasurePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BloodPreasurePage = /** @class */ (function () {
    function BloodPreasurePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = this.navParams.data.item;
    }
    BloodPreasurePage.prototype.ionViewDidLoad = function () {
    };
    BloodPreasurePage.prototype.cancelAdd = function () {
        this.navCtrl.pop();
    };
    BloodPreasurePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-blood-preasure',template:/*ion-inline-start:"/home/tung/Documents/learnIonic/heart/src/pages/blood-preasure/blood-preasure.html"*/'<!--\n  Generated template for the BloodPreasurePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Systolic Blood Pressure</ion-label>\n      <ion-input type="text" value="" required ng-pattern="/\d{2,3}/"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Diastolic Blood Pressure</ion-label>\n      <ion-input type="text" value="" required ng-pattern="/\d{2,3}/"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button class="btn" ion-button color="primary" full  >Update</button>\n    <button class="btn" ion-button color="primary" full (click)="cancelAdd()">Cancel</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/tung/Documents/learnIonic/heart/src/pages/blood-preasure/blood-preasure.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], BloodPreasurePage);
    return BloodPreasurePage;
}());

//# sourceMappingURL=blood-preasure.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeDoctorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ChangeDoctorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ChangeDoctorPage = /** @class */ (function () {
    function ChangeDoctorPage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.Doctor = auth.currentUserInfo.doctor;
    }
    ChangeDoctorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangeDoctorPage');
    };
    ChangeDoctorPage.prototype.update = function () {
        this.auth.currentUserInfo.doctor = this.Doctor;
        this.navCtrl.pop();
    };
    ChangeDoctorPage.prototype.cancelAdd = function () {
        this.navCtrl.pop();
    };
    ChangeDoctorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-change-doctor',template:/*ion-inline-start:"/home/tung/Documents/learnIonic/heart/src/pages/change-doctor/change-doctor.html"*/'<!--\n  Generated template for the ChangeDoctorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Doctor Name</ion-label>\n      <ion-input type="text" value="" required [(ngModel)]="this.Doctor.docName"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Phone Number</ion-label>\n      <ion-input type="text" value="" required [(ngModel)]="this.Doctor.phoneNumber"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button class="btn" ion-button color="primary" full  (click)="update()">Update</button>\n    <button class="btn" ion-button color="primary" full (click)="cancelAdd()">Cancel</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/tung/Documents/learnIonic/heart/src/pages/change-doctor/change-doctor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], ChangeDoctorPage);
    return ChangeDoctorPage;
}());

//# sourceMappingURL=change-doctor.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorGetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DoctorGetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DoctorGetPage = /** @class */ (function () {
    function DoctorGetPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.info = navParams.data.info;
        console.log(this.info);
        // this.getScore();
        // this.showHealth();
    }
    DoctorGetPage.prototype.getScore = function () {
        this.score = [10, 10, 10, 10, 10];
        // this.info.BP.forEach( ele => {ele.isUndefined||ele===0})
    };
    DoctorGetPage.prototype.showHealth = function () {
        this.HealthEL = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.Health.nativeElement, {
            type: 'radar',
            data: {
                labels: ["Heart Rate", "Blood Pressure", "Emotion", "BMI", "Medicine Take"],
                datasets: [{
                        backgroundColor: "#E63135",
                        data: [7, 6, 6, 9, 10]
                    }]
            },
            options: {
                legend: {
                    display: false
                },
                responsive: true,
                title: {
                    display: false,
                    text: 'Patient '
                },
                scale: {
                    ticks: {
                        beginAtZero: true
                    }
                }
            }
        });
    };
    DoctorGetPage.prototype.ionViewDidLoad = function () {
        this.showHealth();
        console.log('ionViewDidLoad DoctorGetPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('Health'),
        __metadata("design:type", Object)
    ], DoctorGetPage.prototype, "Health", void 0);
    DoctorGetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-doctor-get',template:/*ion-inline-start:"/home/tung/Documents/learnIonic/heart/src/pages/doctor-get/doctor-get.html"*/'<!--\n  Generated template for the DoctorGetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      Name:         {{this.info.user.name}}\n    </ion-item>\n    <ion-item>\n      E-mail:      {{this.info.user.email}}\n    </ion-item>\n    <ion-label>Medicine List:</ion-label>\n    <ion-item *ngFor="let medicine of this.info.medicineList;">\n     {{medicine.medName}}\n    </ion-item>\n  </ion-list>\n  <ion-card>\n    <ion-card-header class="header">\n      Patient Health\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #Health></canvas>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/tung/Documents/learnIonic/heart/src/pages/doctor-get/doctor-get.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], DoctorGetPage);
    return DoctorGetPage;
}());

//# sourceMappingURL=doctor-get.js.map

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 130;

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-new-medicine/add-new-medicine.module": [
		462,
		16
	],
	"../pages/article/article.module": [
		464,
		15
	],
	"../pages/blood-preasure/blood-preasure.module": [
		468,
		14
	],
	"../pages/change-doctor/change-doctor.module": [
		469,
		13
	],
	"../pages/chart/chart.module": [
		463,
		12
	],
	"../pages/doctor-get/doctor-get.module": [
		471,
		11
	],
	"../pages/heart-rate/heart-rate.module": [
		467,
		10
	],
	"../pages/home/home.module": [
		473,
		2
	],
	"../pages/login/login.module": [
		474,
		1
	],
	"../pages/medicine-detail/medicine-detail.module": [
		460,
		9
	],
	"../pages/medicine-list/medicine-list.module": [
		461,
		8
	],
	"../pages/medicine/medicine.module": [
		466,
		7
	],
	"../pages/profile/profile.module": [
		470,
		6
	],
	"../pages/register/register.module": [
		475,
		0
	],
	"../pages/setting/setting.module": [
		472,
		5
	],
	"../pages/splash/splash.module": [
		459,
		4
	],
	"../pages/user-manual/user-manual.module": [
		465,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 172;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Info__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthServiceProvider = /** @class */ (function () {
    // API_URL: string = "http://10.0.2.2:8080/api/";
    function AuthServiceProvider(http) {
        this.http = http;
        this.currentUserInfo = new __WEBPACK_IMPORTED_MODULE_4__Info__["a" /* Info */]();
        this.API_URL = "http://localhost:8080/api/";
    }
    AuthServiceProvider.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                _this.http.get(_this.API_URL + 'login?name=' + credentials.name + "&password=" + credentials.password)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    if (data.length === 0) {
                        var access = false;
                        observer.next(access);
                        observer.complete();
                    }
                    else {
                        _this.currentUserInfo = data[0];
                        var access = (_this.currentUserInfo !== null || _this.currentUserInfo !== undefined);
                        observer.next(access);
                        observer.complete();
                    }
                });
            });
        }
    };
    AuthServiceProvider.prototype.register = function (infoNew) {
        if (infoNew.email === null || infoNew.password === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            this.http.post(this.API_URL + "create", infoNew).subscribe();
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                observer.next(true);
                observer.complete();
            });
        }
    };
    Object.defineProperty(AuthServiceProvider.prototype, "userInfo", {
        get: function () {
            return this.currentUserInfo;
        },
        enumerable: true,
        configurable: true
    });
    AuthServiceProvider.prototype.logout = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.currentUserInfo = null;
            observer.next(true);
            observer.complete();
        });
    };
    AuthServiceProvider.prototype.update = function () {
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MedicineInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return User; });
/* unused harmony export Doctor */
/* unused harmony export BloodPressure */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Info; });
var MedicineInfo = /** @class */ (function () {
    function MedicineInfo(medName, barcode, medInfo) {
        this.timeList = new Array();
        this.medName = medName;
        this.barcode = barcode;
        this.medInfo = medInfo;
        this.conflictList = new Array();
        this.timeList = new Array();
    }
    return MedicineInfo;
}());

var User = /** @class */ (function () {
    function User(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    return User;
}());

var Doctor = /** @class */ (function () {
    function Doctor() {
        this.docName = "";
        this.phoneNumber = 0;
    }
    return Doctor;
}());

var BloodPressure = /** @class */ (function () {
    function BloodPressure(high_pressure, low_pressure) {
        this.high_pressure = high_pressure;
        this.low_pressure = low_pressure;
    }
    return BloodPressure;
}());

var Info = /** @class */ (function () {
    function Info() {
    }
    return Info;
}());

//# sourceMappingURL=Info.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__medicine_list_medicine_list__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_new_medicine_add_new_medicine__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chart_chart__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__article_article__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_manual_user_manual__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











/**
 * Generated class for the MedicinePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MedicinePage = /** @class */ (function () {
    function MedicinePage(navCtrl, barcodeScanner, alertCtrl, auth, http) {
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.http = http;
        this.thisAuth = auth;
    }
    MedicinePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MedicinePage');
    };
    MedicinePage.prototype.scanBarcode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.barcodeScanner.scan()];
                    case 1:
                        _a.bar_results = _b.sent();
                        return [4 /*yield*/, this.http.get(this.thisAuth.API_URL + 'medicine?barcode=' + this.bar_results.text)
                                .toPromise().then(function (res) { return _this.medicine = res.json(); })];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__add_new_medicine_add_new_medicine__["a" /* AddNewMedicinePage */], { medicine: this.medicine[0] })];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MedicinePage.prototype.showMedcines = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__medicine_list_medicine_list__["a" /* MedicineListPage */]);
    };
    MedicinePage.prototype.showChart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__chart_chart__["a" /* ChartPage */]);
    };
    /**
     * 1. request server make a toke -->
     * 2. recieve the toke to create the qr code -->
     * 3. doctor scan the token and use it to generate data
     * @returns {Promise<void>}
     */
    MedicinePage.prototype.qrcode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var code;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.auth.API_URL + 'token?name=' + this.auth.currentUserInfo.user.name)
                            .toPromise()
                            .then(function (res) { code = res.json(); console.log(code); })];
                    case 1:
                        _a.sent();
                        // const result = await this.barcode.encode(this.barcode.Encode.TEXT_TYPE, this.auth.currentUserInfo._id );
                        return [4 /*yield*/, this.barcodeScanner
                                .encode(this.barcodeScanner.Encode.TEXT_TYPE, code).then(function (encodedData) {
                                console.log(encodedData);
                                _this.result = encodedData;
                            }, function (err) {
                                console.log("Error occured : " + err);
                            })];
                    case 2:
                        // const result = await this.barcode.encode(this.barcode.Encode.TEXT_TYPE, this.auth.currentUserInfo._id );
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MedicinePage.prototype.showTips = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__article_article__["a" /* ArticlePage */]);
    };
    MedicinePage.prototype.showInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__user_manual_user_manual__["a" /* UserManualPage */]);
    };
    MedicinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-medicine',template:/*ion-inline-start:"/home/tung/Documents/learnIonic/heart/src/pages/medicine/medicine.html"*/'<!--\n  Generated template for the MedicinePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n\n\n<ion-content id="quick_acc">\n  <div id="content">\n    <ion-fab center middle>\n\n      <button ion-fab color="primary"><ion-icon name="heart"></ion-icon></button>\n      <ion-fab-list side="top">\n        <button ion-fab color="red_dark"><ion-icon name="add" (click)="scanBarcode()"></ion-icon></button>\n      </ion-fab-list>\n      <ion-fab-list side="left">\n        <button ion-fab color="light"><ion-icon name="card" (click)="qrcode()" ></ion-icon></button>\n      </ion-fab-list>\n      <ion-fab-list side="right">\n        <button ion-fab color="dark"><ion-icon name="analytics" (click)="showChart()"></ion-icon></button>\n      </ion-fab-list>\n    </ion-fab>\n  </div>\n\n  <div class="card-background-page">\n\n    <ion-card (press)="showMedcines()">\n      <img src="assets/img/My-Medicines.jpg"/>\n      <div class="card-title">My Medicines</div>\n      <div class="card-subtitle">Check your medicines</div>\n    </ion-card>\n\n    <ion-card (press)="showTips()">\n      <img src="assets/img/Health-Tips.jpg"/>\n      <div class="card-title">Health Tips</div>\n      <div class="card-subtitle">Health Tips from Doctor</div>\n    </ion-card>\n\n    <ion-card (press)="showInfo()">\n      <img src="assets/img/Information.jpg"/>\n      <div class="card-title">Information</div>\n      <div class="card-subtitle">User Manual</div>\n    </ion-card>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/home/tung/Documents/learnIonic/heart/src/pages/medicine/medicine.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
    ], MedicinePage);
    return MedicinePage;
}());

//# sourceMappingURL=medicine.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__heart_rate_heart_rate__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blood_preasure_blood_preasure__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chart_chart__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__change_doctor_change_doctor__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(nav, auth, callNumber) {
        this.nav = nav;
        this.auth = auth;
        this.callNumber = callNumber;
        this.items = [];
        this.items = [
            {
                'title': 'Heart Rate',
                'iconN': 'heart',
                'color': '#E63135',
                'name': 'heart_rate'
            },
            {
                'title': 'BMI',
                'iconN': 'body',
                'color': '#0CA9EA',
                'name': 'bmi'
            },
            {
                'title': 'Emotion',
                'iconN': 'happy',
                'color': '#FFD439',
                'name': 'Emotion'
            },
        ];
        this.bp = {
            'title': 'Blood Pressure',
            'iconN': 'stats',
            'color': '#F46529',
            'name': 'BP'
        };
    }
    ProfilePage.prototype.makeCall = function () {
        this.callNumber.callNumber(this.auth.currentUserInfo.doctor.phoneNumber.toString(), true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    ProfilePage.prototype.resetPhone = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__change_doctor_change_doctor__["a" /* ChangeDoctorPage */]);
    };
    ProfilePage.prototype.openNavDetailsPage = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__heart_rate_heart_rate__["a" /* HeartRatePage */], { item: item });
    };
    ProfilePage.prototype.openBPDetailsPage = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__blood_preasure_blood_preasure__["a" /* BloodPreasurePage */], { item: item });
    };
    ProfilePage.prototype.goChart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__chart_chart__["a" /* ChartPage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/tung/Documents/learnIonic/heart/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n\n    <ion-item>\n      <h2>{{auth.currentUserInfo.doctor.docName}}</h2>\n    </ion-item>\n    <img src="assets/img/Call-doctor.jpg">\n\n    <ion-row>\n      <ion-col>\n        <button class="small-btn" ion-button icon-left clear small (press)="makeCall()">\n          <ion-icon name="call"></ion-icon>\n          <div>Make Call</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button class="small-btn" ion-button icon-left clear small (click)="resetPhone()">\n          <ion-icon name="settings"></ion-icon>\n          <div>Change Number</div>\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="openNavDetailsPage(item)" icon-start>\n      <ion-icon [name]="item.iconN" [ngStyle]="{\'color\': item.color}" item-start></ion-icon>\n      {{ item.title }}\n      <ion-icon name="arrow-forward" item-end></ion-icon>\n    </button>\n    <button ion-item (click)="openBPDetailsPage(bp)" icon-start>\n      <ion-icon [name]="bp.iconN" [ngStyle]="{\'color\': bp.color}" item-start></ion-icon>\n      {{ bp.title }}\n      <ion-icon name="arrow-forward" item-end></ion-icon>\n    </button>\n    <button ion-button class="btn" round clear (click)="goChart()">\n       Show Health Log <ion-icon name="arrow-dropright-circle" class="fig" itemid></ion-icon>\n    </button>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/tung/Documents/learnIonic/heart/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__["a" /* CallNumber */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doctor_get_doctor_get__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SettingPage = /** @class */ (function () {
    function SettingPage(navCtrl, barcodeScanner, http, Auth) {
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.http = http;
        this.Auth = Auth;
    }
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
    };
    SettingPage.prototype.scanBarcode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.barcodeScanner.scan()];
                    case 1:
                        _a.qr_result = _b.sent();
                        return [4 /*yield*/, this.http.get(this.Auth.API_URL + 'patient?token=' + this.qr_result.text)
                                .toPromise().then(function (res) {
                                _this.info = res.json();
                                console.log(_this.info);
                            })];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__doctor_get_doctor_get__["a" /* DoctorGetPage */], { info: this.info[0] })];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingPage.prototype.saveBack = function () {
        this.http.post(this.Auth.API_URL + 'save', this.Auth.userInfo).subscribe();
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"/home/tung/Documents/learnIonic/heart/src/pages/setting/setting.html"*/'<!--\n  Generated template for the SettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <button ion-button color="primary" block class="btn" (click)="scanBarcode()" >I\'m Doctor</button>\n\n  <button ion-button color="primary" block class="btn" (click)="saveBack()">Update</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/tung/Documents/learnIonic/heart/src/pages/setting/setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(359);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_local_notifications__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_service_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_medicine_medicine__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_setting_setting__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_splash_splash__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_heart_rate_heart_rate__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_medicine_list_medicine_list__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_medicine_detail_medicine_detail__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_add_new_medicine_add_new_medicine__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_blood_preasure_blood_preasure__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_chart_chart__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_doctor_get_doctor_get__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_article_article__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_user_manual_user_manual__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_change_doctor_change_doctor__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* HeartLink */],
                __WEBPACK_IMPORTED_MODULE_11__pages_medicine_medicine__["a" /* MedicinePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_splash_splash__["a" /* SplashPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_heart_rate_heart_rate__["a" /* HeartRatePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_medicine_list_medicine_list__["a" /* MedicineListPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_medicine_detail_medicine_detail__["a" /* MedicineDetailPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_add_new_medicine_add_new_medicine__["a" /* AddNewMedicinePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_blood_preasure_blood_preasure__["a" /* BloodPreasurePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_chart_chart__["a" /* ChartPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_doctor_get_doctor_get__["a" /* DoctorGetPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_article_article__["a" /* ArticlePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_user_manual_user_manual__["a" /* UserManualPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_change_doctor_change_doctor__["a" /* ChangeDoctorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* HeartLink */], {}, {
                    links: [
                        { loadChildren: '../pages/splash/splash.module#SplashPageModule', name: 'SplashPage', segment: 'splash', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medicine-detail/medicine-detail.module#MedicineDetailPageModule', name: 'MedicineDetailPage', segment: 'medicine-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medicine-list/medicine-list.module#MedicineListPageModule', name: 'MedicineListPage', segment: 'medicine-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-new-medicine/add-new-medicine.module#AddNewMedicinePageModule', name: 'AddNewMedicinePage', segment: 'add-new-medicine', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chart/chart.module#ChartPageModule', name: 'ChartPage', segment: 'chart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/article/article.module#ArticlePageModule', name: 'ArticlePage', segment: 'article', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-manual/user-manual.module#UserManualPageModule', name: 'UserManualPage', segment: 'user-manual', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medicine/medicine.module#MedicinePageModule', name: 'MedicinePage', segment: 'medicine', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/heart-rate/heart-rate.module#HeartRatePageModule', name: 'HeartRatePage', segment: 'heart-rate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/blood-preasure/blood-preasure.module#BloodPreasurePageModule', name: 'BloodPreasurePage', segment: 'blood-preasure', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-doctor/change-doctor.module#ChangeDoctorPageModule', name: 'ChangeDoctorPage', segment: 'change-doctor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/doctor-get/doctor-get.module#DoctorGetPageModule', name: 'DoctorGetPage', segment: 'doctor-get', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* HeartLink */],
                __WEBPACK_IMPORTED_MODULE_11__pages_medicine_medicine__["a" /* MedicinePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_splash_splash__["a" /* SplashPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_heart_rate_heart_rate__["a" /* HeartRatePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_medicine_list_medicine_list__["a" /* MedicineListPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_medicine_detail_medicine_detail__["a" /* MedicineDetailPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_add_new_medicine_add_new_medicine__["a" /* AddNewMedicinePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_blood_preasure_blood_preasure__["a" /* BloodPreasurePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_chart_chart__["a" /* ChartPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_doctor_get_doctor_get__["a" /* DoctorGetPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_article_article__["a" /* ArticlePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_user_manual_user_manual__["a" /* UserManualPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_change_doctor_change_doctor__["a" /* ChangeDoctorPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_local_notifications__["a" /* LocalNotifications */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 180,
	"./af.js": 180,
	"./ar": 181,
	"./ar-dz": 182,
	"./ar-dz.js": 182,
	"./ar-kw": 183,
	"./ar-kw.js": 183,
	"./ar-ly": 184,
	"./ar-ly.js": 184,
	"./ar-ma": 185,
	"./ar-ma.js": 185,
	"./ar-sa": 186,
	"./ar-sa.js": 186,
	"./ar-tn": 187,
	"./ar-tn.js": 187,
	"./ar.js": 181,
	"./az": 188,
	"./az.js": 188,
	"./be": 189,
	"./be.js": 189,
	"./bg": 190,
	"./bg.js": 190,
	"./bn": 191,
	"./bn.js": 191,
	"./bo": 192,
	"./bo.js": 192,
	"./br": 193,
	"./br.js": 193,
	"./bs": 194,
	"./bs.js": 194,
	"./ca": 195,
	"./ca.js": 195,
	"./cs": 196,
	"./cs.js": 196,
	"./cv": 197,
	"./cv.js": 197,
	"./cy": 198,
	"./cy.js": 198,
	"./da": 199,
	"./da.js": 199,
	"./de": 200,
	"./de-at": 201,
	"./de-at.js": 201,
	"./de-ch": 202,
	"./de-ch.js": 202,
	"./de.js": 200,
	"./dv": 203,
	"./dv.js": 203,
	"./el": 204,
	"./el.js": 204,
	"./en-au": 205,
	"./en-au.js": 205,
	"./en-ca": 206,
	"./en-ca.js": 206,
	"./en-gb": 207,
	"./en-gb.js": 207,
	"./en-ie": 208,
	"./en-ie.js": 208,
	"./en-nz": 209,
	"./en-nz.js": 209,
	"./eo": 210,
	"./eo.js": 210,
	"./es": 211,
	"./es-do": 212,
	"./es-do.js": 212,
	"./es.js": 211,
	"./et": 213,
	"./et.js": 213,
	"./eu": 214,
	"./eu.js": 214,
	"./fa": 215,
	"./fa.js": 215,
	"./fi": 216,
	"./fi.js": 216,
	"./fo": 217,
	"./fo.js": 217,
	"./fr": 218,
	"./fr-ca": 219,
	"./fr-ca.js": 219,
	"./fr-ch": 220,
	"./fr-ch.js": 220,
	"./fr.js": 218,
	"./fy": 221,
	"./fy.js": 221,
	"./gd": 222,
	"./gd.js": 222,
	"./gl": 223,
	"./gl.js": 223,
	"./gom-latn": 224,
	"./gom-latn.js": 224,
	"./he": 225,
	"./he.js": 225,
	"./hi": 226,
	"./hi.js": 226,
	"./hr": 227,
	"./hr.js": 227,
	"./hu": 228,
	"./hu.js": 228,
	"./hy-am": 229,
	"./hy-am.js": 229,
	"./id": 230,
	"./id.js": 230,
	"./is": 231,
	"./is.js": 231,
	"./it": 232,
	"./it.js": 232,
	"./ja": 233,
	"./ja.js": 233,
	"./jv": 234,
	"./jv.js": 234,
	"./ka": 235,
	"./ka.js": 235,
	"./kk": 236,
	"./kk.js": 236,
	"./km": 237,
	"./km.js": 237,
	"./kn": 238,
	"./kn.js": 238,
	"./ko": 239,
	"./ko.js": 239,
	"./ky": 240,
	"./ky.js": 240,
	"./lb": 241,
	"./lb.js": 241,
	"./lo": 242,
	"./lo.js": 242,
	"./lt": 243,
	"./lt.js": 243,
	"./lv": 244,
	"./lv.js": 244,
	"./me": 245,
	"./me.js": 245,
	"./mi": 246,
	"./mi.js": 246,
	"./mk": 247,
	"./mk.js": 247,
	"./ml": 248,
	"./ml.js": 248,
	"./mr": 249,
	"./mr.js": 249,
	"./ms": 250,
	"./ms-my": 251,
	"./ms-my.js": 251,
	"./ms.js": 250,
	"./my": 252,
	"./my.js": 252,
	"./nb": 253,
	"./nb.js": 253,
	"./ne": 254,
	"./ne.js": 254,
	"./nl": 255,
	"./nl-be": 256,
	"./nl-be.js": 256,
	"./nl.js": 255,
	"./nn": 257,
	"./nn.js": 257,
	"./pa-in": 258,
	"./pa-in.js": 258,
	"./pl": 259,
	"./pl.js": 259,
	"./pt": 260,
	"./pt-br": 261,
	"./pt-br.js": 261,
	"./pt.js": 260,
	"./ro": 262,
	"./ro.js": 262,
	"./ru": 263,
	"./ru.js": 263,
	"./sd": 264,
	"./sd.js": 264,
	"./se": 265,
	"./se.js": 265,
	"./si": 266,
	"./si.js": 266,
	"./sk": 267,
	"./sk.js": 267,
	"./sl": 268,
	"./sl.js": 268,
	"./sq": 269,
	"./sq.js": 269,
	"./sr": 270,
	"./sr-cyrl": 271,
	"./sr-cyrl.js": 271,
	"./sr.js": 270,
	"./ss": 272,
	"./ss.js": 272,
	"./sv": 273,
	"./sv.js": 273,
	"./sw": 274,
	"./sw.js": 274,
	"./ta": 275,
	"./ta.js": 275,
	"./te": 276,
	"./te.js": 276,
	"./tet": 277,
	"./tet.js": 277,
	"./th": 278,
	"./th.js": 278,
	"./tl-ph": 279,
	"./tl-ph.js": 279,
	"./tlh": 280,
	"./tlh.js": 280,
	"./tr": 281,
	"./tr.js": 281,
	"./tzl": 282,
	"./tzl.js": 282,
	"./tzm": 283,
	"./tzm-latn": 284,
	"./tzm-latn.js": 284,
	"./tzm.js": 283,
	"./uk": 285,
	"./uk.js": 285,
	"./ur": 286,
	"./ur.js": 286,
	"./uz": 287,
	"./uz-latn": 288,
	"./uz-latn.js": 288,
	"./uz.js": 287,
	"./vi": 289,
	"./vi.js": 289,
	"./x-pseudo": 290,
	"./x-pseudo.js": 290,
	"./yo": 291,
	"./yo.js": 291,
	"./zh-cn": 292,
	"./zh-cn.js": 292,
	"./zh-hk": 293,
	"./zh-hk.js": 293,
	"./zh-tw": 294,
	"./zh-tw.js": 294
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 420;

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeartLink; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_splash_splash__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeartLink = /** @class */ (function () {
    function HeartLink(platform, statusBar, splashScreen, modalCtrl) {
        this.rootPage = 'LoginPage';
        platform.ready().then(function () {
            statusBar.styleDefault();
            var splash = modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_splash_splash__["a" /* SplashPage */]);
            splash.present();
        });
    }
    HeartLink = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/tung/Documents/learnIonic/heart/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/tung/Documents/learnIonic/heart/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], HeartLink);
    return HeartLink;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ChartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ChartPage = /** @class */ (function () {
    function ChartPage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        console.log(auth.currentUserInfo);
    }
    ChartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChartPage');
        this.createEmotion();
        this.createHaertRate();
        this.createBMI();
        this.createBP();
    };
    ChartPage.prototype.createHaertRate = function () {
        var max = Math.max.apply(Math, this.auth.currentUserInfo.heart_rate);
        var min = Math.min.apply(Math, this.auth.currentUserInfo.heart_rate);
        this.heartRateChartEl = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](this.heart_rate.nativeElement, {
            type: 'line',
            data: {
                labels: ["-6", "-5", "-4", "-3", "-2", "-1", "0"],
                datasets: [{
                        label: "Heart rate for last 7 updates",
                        borderColor: "#E63135",
                        fill: true,
                        fillColor: "rgba(220,220,220,0.5)",
                        data: this.auth.currentUserInfo.heart_rate
                    }]
            },
            options: {
                legend: {
                    display: false
                },
                responsive: true,
                title: {
                    display: false,
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    yAxes: [{
                            display: true,
                            ticks: {
                                suggestedMax: max + 3,
                                suggestedMin: min - 3,
                            }
                        }],
                    xAxes: [{
                            display: true,
                            ticks: {
                                autoSkip: false
                            }
                        }]
                }
            }
        });
    };
    ChartPage.prototype.createBP = function () {
        var highPressure = new Array();
        var lowPressure = new Array();
        var max = Math.max.apply(Math, highPressure);
        var min = Math.min.apply(Math, lowPressure);
        this.auth.currentUserInfo.BP.forEach(function (ele) {
            lowPressure.push(ele["high_pressure"]);
            highPressure.push(ele["low_pressure"]);
        });
        this.BPChartEL = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](this.BP.nativeElement, {
            type: 'line',
            data: {
                labels: ["-6", "-5", "-4", "-3", "-2", "-1", "0"],
                datasets: [{
                        label: "Systolic Blood Pressure",
                        borderColor: '#F46529',
                        fill: true,
                        fillColor: "rgba(220,220,220,0.5)",
                        data: highPressure
                    }, {
                        label: "Diastolic Blood Pressure",
                        borderColor: '#00a826',
                        fill: true,
                        fillColor: "rgba(101,73,156,0.5)",
                        data: lowPressure
                    }]
            },
            options: {
                legend: {
                    display: false
                },
                responsive: true,
                title: {
                    display: false,
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    yAxes: [{
                            display: true,
                            ticks: {
                                suggestedMax: max + 3,
                                suggestedMin: min - 3,
                            }
                        }],
                    xAxes: [{
                            display: true,
                            ticks: {
                                autoSkip: false
                            }
                        }]
                }
            }
        });
    };
    ChartPage.prototype.createBMI = function () {
        var max = Math.max.apply(Math, this.auth.currentUserInfo.bmi);
        console.log(max);
        var min = Math.min.apply(Math, this.auth.currentUserInfo.bmi);
        console.log(min);
        this.bmiChartEl = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](this.bmi.nativeElement, {
            type: 'line',
            data: {
                labels: ["-6", "-5", "-4", "-3", "-2", "-1", "0"],
                datasets: [{
                        label: "BMI for last 7 updates",
                        borderColor: '#0CA9EA',
                        fill: true,
                        fillColor: "rgba(220,220,220,0.5)",
                        data: this.auth.currentUserInfo.bmi
                        // data:  [ 22.2, 22.2, 22.3, 22.4, 22.5, 22.5 ]
                    }]
            },
            options: {
                legend: {
                    display: false
                },
                responsive: true,
                title: {
                    display: false,
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    yAxes: [{
                            display: true,
                            ticks: {
                                suggestedMax: max + 0.1,
                                suggestedMin: min - 0.1,
                                stepSize: 0.1
                            }
                        }],
                    xAxes: [{
                            display: true,
                            ticks: {
                                autoSkip: false
                            }
                        }]
                }
            }
        });
    };
    ChartPage.prototype.createEmotion = function () {
        var max = Math.max.apply(Math, this.auth.currentUserInfo.Emotion);
        var min = Math.min.apply(Math, this.auth.currentUserInfo.Emotion);
        this.emotionChartEl = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](this.Emotion.nativeElement, {
            type: 'line',
            data: {
                labels: ["-6", "-5", "-4", "-3", "-2", "-1", "0"],
                datasets: [{
                        label: "Emotion score for last 7 updates",
                        borderColor: '#FFD439',
                        fill: true,
                        fillColor: "rgba(220,220,220,0.5)",
                        data: this.auth.currentUserInfo.Emotion
                    }]
            },
            options: {
                legend: {
                    display: false
                },
                responsive: true,
                title: {
                    display: false,
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    yAxes: [{
                            display: true,
                            ticks: {
                                suggestedMax: max + 1,
                                suggestedMin: min - 1,
                            }
                        }],
                    xAxes: [{
                            display: true,
                            ticks: {
                                autoSkip: false
                            }
                        }]
                }
            }
        });
    };
    ChartPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('Emotion'),
        __metadata("design:type", Object)
    ], ChartPage.prototype, "Emotion", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('BP'),
        __metadata("design:type", Object)
    ], ChartPage.prototype, "BP", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('heart_rate'),
        __metadata("design:type", Object)
    ], ChartPage.prototype, "heart_rate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('bmi'),
        __metadata("design:type", Object)
    ], ChartPage.prototype, "bmi", void 0);
    ChartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-chart',template:/*ion-inline-start:"/home/tung/Documents/learnIonic/heart/src/pages/chart/chart.html"*/'<!--\n  Generated template for the ChartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons end>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header class="header">\n      Heart Rate\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #heart_rate></canvas>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header class="header">\n      Blood Pressure\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #BP></canvas>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header class="header">\n      BMI\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #bmi></canvas>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header class="header">\n      Emotion\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #Emotion></canvas>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/tung/Documents/learnIonic/heart/src/pages/chart/chart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], ChartPage);
    return ChartPage;
}());

//# sourceMappingURL=chart.js.map

/***/ })

},[340]);
//# sourceMappingURL=main.js.map