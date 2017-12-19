webpackJsonp([17],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MedicineInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return User; });
/* unused harmony export Doctor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BloodPressure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Info; });
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

/***/ 114:
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
            selector: 'page-splash',template:/*ion-inline-start:"/home/tung/Documents/learnIonic/Heart_Health/src/pages/splash/splash.html"*/'<ion-header>\n\n</ion-header>\n\n\n<ion-content class="no-scroll" padding>\n\n  <div class="holder">\n    <div class="circles-preloader">\n      <div class="circles"><div class="circles-in"><div></div><div></div><div></div><div></div><div></div></div></div>\n      <div class="circles"><div class="circles-in"><div></div><div></div><div></div><div></div><div></div></div></div>\n      <div class="circles"><div class="circles-in"><div></div><div></div><div></div><div></div><div></div></div></div>\n      <div class="circles"><div class="circles-in"><div></div><div></div><div></div><div></div><div></div></div></div>\n      <div class="circles"><div class="circles-in"><div></div><div></div><div></div><div></div><div></div></div></div>\n      <div class="circles"><div class="circles-in"><div></div><div></div><div></div><div></div><div></div></div></div>\n      <div class="circles"><div class="circles-in"><div></div><div></div><div></div><div></div><div></div></div></div>\n      <div class="circles"><div class="circles-in"><div></div><div></div><div></div><div></div><div></div></div></div>\n      <div class="circles"><div class="circles-in"><div></div><div></div><div></div><div></div><div></div></div></div>\n      <div class="circles"><div class="circles-in"><div></div><div></div><div></div><div></div><div></div></div></div>\n    </div>\n    <div class="p">Heart Link</div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/tung/Documents/learnIonic/Heart_Health/src/pages/splash/splash.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], SplashPage);
    return SplashPage;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicineDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MedicineDetailPage = /** @class */ (function () {
    function MedicineDetailPage(navCtrl, navParams, auth, localNotifications, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.localNotifications = localNotifications;
        this.events = events;
        this.medicine = this.navParams.data.medicine;
        this.idx = this.navParams.data.idx;
        this.Alarms = this.medicine.timeList;
        if (!this.Alarms)
            this.Alarms = new Array();
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
            selector: 'page-medicine-detail',template:/*ion-inline-start:"/home/tung/Documents/learnIonic/Heart_Health/src/pages/medicine-detail/medicine-detail.html"*/'<ion-header>\n\n</ion-header>\n\n\n<ion-content  class="no-scroll" padding>\n  <ion-list>\n    <ion-item>\n      Name:         {{medicine.medName}}\n    </ion-item>\n    <ion-item>\n      BarCode:      {{medicine.barcode}}\n    </ion-item>\n    <ion-item class="item" text-wrap>\n      {{medicine.medInfo}}\n    </ion-item>\n  </ion-list>\n  <ion-list class="timeList">\n    <ion-label class="header">\n      Alarm time\n    </ion-label>\n\n    <ion-item *ngFor="let a of Alarms; let i=index" (press)="delete(i)" >\n      <ion-label>Alarm {{i+1}}</ion-label>\n      <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="Alarms[i]"></ion-datetime>\n    </ion-item>\n\n    <button ion-button class="btn" round clear (click)="addAlarm()">\n      <ion-icon name="add-circle" class="add-alarm" itemid></ion-icon>\n      Add Alarm\n    </button>\n    <button ion-button class="btn" [color]="red_light" full (click)="getOut()">\n      Back\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/tung/Documents/learnIonic/Heart_Health/src/pages/medicine-detail/medicine-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], MedicineDetailPage);
    return MedicineDetailPage;
}());

//# sourceMappingURL=medicine-detail.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicineListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medicine_detail_medicine_detail__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MedicineListPage = /** @class */ (function () {
    function MedicineListPage(nav, auth, localNotifications) {
        this.nav = nav;
        this.auth = auth;
        this.localNotifications = localNotifications;
        this.medicines = auth.currentUserInfo.medicineList;
    }
    MedicineListPage.prototype.openNavDetailsPage = function (medicine, idx) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__medicine_detail_medicine_detail__["a" /* MedicineDetailPage */], { medicine: medicine, idx: idx });
    };
    MedicineListPage.prototype.deleteMed = function (idx) {
        this.auth.currentUserInfo.medicineList.splice(idx, 1);
        this.auth.update();
    };
    MedicineListPage.prototype.getOut = function () {
        this.refreshAlarm();
        this.nav.pop();
    };
    MedicineListPage.prototype.refreshAlarm = function () {
        this.localNotifications.cancelAll();
        var date = new Date();
        var schedule_option = { id: 0,
            text: "",
            at: date,
            sound: 'file://assets/audio/alarm.wav' };
        var schedules = new Array();
        var today = new Date().toISOString();
        var id = 1;
        this.auth.currentUserInfo.medicineList.forEach(function (med) {
            if (med.timeList != undefined)
                med.timeList.forEach(function (time) {
                    schedule_option.id = id;
                    id++;
                    var atStr = today.replace(/T.{5}/, "T" + time);
                    schedule_option.text = med.medName + atStr;
                    schedule_option.at = new Date(atStr);
                    schedules.push(schedule_option);
                });
        });
        this.localNotifications.schedule(schedules);
    };
    MedicineListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-medicine-list',template:/*ion-inline-start:"/home/tung/Documents/learnIonic/Heart_Health/src/pages/medicine-list/medicine-list.html"*/'<ion-header>\n</ion-header>\n\n\n<ion-content class="no-scroll" padding>\n  <ion-card>\n    <ion-card-header align-items-center>\n      Medicine List\n    </ion-card-header>\n\n    <ion-list>\n      <ion-item-sliding *ngFor="let medicine of medicines; let idx=index"\n                        (click)="openNavDetailsPage(medicine, idx)">\n        <button ion-item>\n          <ion-icon name="medkit" color="red_light" item-start></ion-icon>\n          {{medicine.medName}}\n          <ion-icon name="arrow-dropright-circle" class="custom-icon" item-end>\n          </ion-icon>\n        </button>\n\n        <ion-item-options side="right">\n          <button ion-button danger (click)="deleteMed(idx)" >\n            <ion-icon name="trash">\n            </ion-icon>\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n\n\n    </ion-list>\n  </ion-card>\n  <button ion-button class="btn" [color]="red_light" full (click)="getOut()">\n    Back\n  </button>\n</ion-content>\n'/*ion-inline-end:"/home/tung/Documents/learnIonic/Heart_Health/src/pages/medicine-list/medicine-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__["a" /* LocalNotifications */]])
    ], MedicineListPage);
    return MedicineListPage;
}());

//# sourceMappingURL=medicine-list.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewMedicinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddNewMedicinePage = /** @class */ (function () {
    function AddNewMedicinePage(navCtrl, navParams, auth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.medicine = this.navParams.data.medicine;
        this.medicine.timeList = new Array();
    }
    AddNewMedicinePage.prototype.ionViewDidLoad = function () { console.log('ionViewDidLoad AddNewMedicinePage'); };
    /**
     * Button funtion to add the medicine to the medicine list
     */
    AddNewMedicinePage.prototype.addMedicine = function () {
        /**
         * check the medicine if have been in the medicine list,
         * or conflict with the exist medicine
         */
        if (this.checkRepeat() && this.checkConflict()) {
            //success updaate
            this.auth.currentUserInfo.medicineList.push(this.medicine);
            this.auth.update();
            this.navCtrl.pop();
        }
        else if (!this.checkRepeat()) {
            // Repeat
            var alert_1 = this.alertCtrl.create({
                title: 'Fail',
                message: "You have added it",
                buttons: ['OK']
            });
            alert_1.present();
        }
        else if (!this.checkConflict()) {
            // Conflict
            var alert_2 = this.alertCtrl.create({
                title: 'Fail',
                message: "Conflict with your current medicines",
                buttons: ['OK']
            });
            alert_2.present();
        }
    };
    /**
     * Button function to cancel sure add
     */
    AddNewMedicinePage.prototype.cancelAdd = function () {
        this.navCtrl.pop();
    };
    /**
     * check if the medicine repeat with exsit one
     * @returns {boolean}
     */
    AddNewMedicinePage.prototype.checkRepeat = function () {
        var _this = this;
        var allow = true;
        this.auth.currentUserInfo.medicineList.forEach(function (x) { if (x.barcode === _this.medicine.barcode)
            allow = false; });
        return allow;
    };
    /**
     * check if the medicine conflict
     * @returns {boolean}
     */
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
            selector: 'page-add-new-medicine',template:/*ion-inline-start:"/home/tung/Documents/learnIonic/Heart_Health/src/pages/add-new-medicine/add-new-medicine.html"*/'<ion-header>\n\n</ion-header>\n\n\n<ion-content class="no-scroll" padding>\n  <h1 class="header"> Do you want to add this medicine to your medkit?</h1>\n  <ion-label>Name:</ion-label>\n  <ion-item>\n    {{medicine.medName}}\n  </ion-item>\n  <ion-label>BarCode:</ion-label>\n  <ion-item>\n    {{medicine.barcode}}\n  </ion-item>\n  <ion-item class="item item-text-wrap" text-wrap>\n    {{medicine.medInfo}}\n  </ion-item>\n  <button ion-button class="btn" [color]="red_light"\n          outline (click)="addMedicine()">\n    Add\n  </button>\n  <button ion-button class="btn" [color]="red_light"\n          outline (click)="cancelAdd()">\n    Cancel\n  </button>\n</ion-content>\n'/*ion-inline-end:"/home/tung/Documents/learnIonic/Heart_Health/src/pages/add-new-medicine/add-new-medicine.html"*/,
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

/***/ 118:
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


var ArticlePage = /** @class */ (function () {
    function ArticlePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ArticlePage.prototype.ionViewDidLoad = function () { console.log('ionViewDidLoad ArticlePage'); };
    ArticlePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-article',template:/*ion-inline-start:"/home/tung/Documents/learnIonic/Heart_Health/src/pages/article/article.html"*/'<ion-header>\n</ion-header>\n\n<ion-content class="no-scroll cards-bg social-cards">\n\n  <!--Three sample article content-->\n  <!--Artilce-1-->\n  <ion-card>\n   <!--Author detail-1-->\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/doctor_yui.jpg">\n      </ion-avatar>\n      <h2>Aragaki Yui</h2>\n      <p>November 5, 2014</p>\n    </ion-item>\n    <ion-card-content>\n      <p>Cholesterol is a fatty substance carried in your blood. Your body needs\n        cholesterol to be healthy, but an imbalance of cholesterol in your blood\n        can lead to a heart attack or stroke.</p>\n    </ion-card-content>\n    <!--Function bar-1-->\n    <ion-row>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'thumbs-up\'></ion-icon>\n          12 Likes\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'text\'></ion-icon>\n          4 Comments\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          11h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <!--Artilce-2-->\n  <ion-card>\n    <!--Author detail-2-->\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/doctor-img2.png">\n      </ion-avatar>\n      <h2>Dr. Akali</h2>\n      <p>May 12, 2017</p>\n    </ion-item>\n    <ion-card-content>\n      <p>Blood pressure isn’t usually something you can feel. If it’s too high,\n        it needs to be treated. Read about blood pressure and what you can do to\n        control high blood pressure.</p>\n    </ion-card-content>\n   <!--Function bar-2-->\n    <ion-row>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'thumbs-up\'></ion-icon>\n          30 Likes\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'text\'></ion-icon>\n          64 Comments\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          30h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <!--Artilce-3-->\n  <ion-card>\n    <!--Author detail-3-->\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/doctor-img3.png">\n      </ion-avatar>\n      <h2>Masami Nagasawa</h2>\n      <p>June 28, 2017</p>\n    </ion-item>\n    <ion-card-content>\n      <p>Regular, moderate physical activity is great for your heart health.\n        It’s never too late to start and get the benefits. It’s also important\n        to sit less during your day and break up your sitting time. Find out\n        what you can do about getting active and sitting less.</p>\n    </ion-card-content>\n    <!--Function bar-3-->\n    <ion-row>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'thumbs-up\'></ion-icon>\n          46 Likes\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'text\'></ion-icon>\n          66 Comments\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          2d ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/tung/Documents/learnIonic/Heart_Health/src/pages/article/article.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ArticlePage);
    return ArticlePage;
}());

//# sourceMappingURL=article.js.map

/***/ }),

/***/ 119:
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
            selector: 'page-user-manual',template:/*ion-inline-start:"/home/tung/Documents/learnIonic/Heart_Health/src/pages/user-manual/user-manual.html"*/'<ion-header>\n\n</ion-header>\n\n\n<ion-content class="no-scroll" padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/tung/Documents/learnIonic/Heart_Health/src/pages/user-manual/user-manual.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], UserManualPage);
    return UserManualPage;
}());

//# sourceMappingURL=user-manual.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeartRatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    /**
     * Save the info to the data base
     */
    HeartRatePage.prototype.saveinfo = function () {
        this.auth.currentUserInfo[this.item.name].shift();
        this.auth.currentUserInfo[this.item.name].push(this.value);
        this.auth.update();
        this.navCtrl.pop();
    };
    HeartRatePage.prototype.cancelAdd = function () {
        this.navCtrl.pop();
    };
    HeartRatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-heart-rate',template:/*ion-inline-start:"/home/tung/Documents/learnIonic/Heart_Health/src/pages/heart-rate/heart-rate.html"*/'<ion-header>\n</ion-header>\n\n<ion-content class="no-scroll" padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>{{item.title}} Value</ion-label>\n      <ion-input type="text" value="" required ng-pattern="/\d{2,3}/"\n                 [(ngModel)]="value">\n      </ion-input>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button class="btn" ion-button color="primary" block (click)="saveinfo()" >\n      Update\n    </button>\n    <button class="btn" ion-button color="primary" block (click)="cancelAdd()">\n      Cancel\n    </button>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/tung/Documents/learnIonic/Heart_Health/src/pages/heart-rate/heart-rate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], HeartRatePage);
    return HeartRatePage;
}());

//# sourceMappingURL=heart-rate.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BloodPreasurePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_Info__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BloodPreasurePage = /** @class */ (function () {
    function BloodPreasurePage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.bp = new __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_Info__["a" /* BloodPressure */](0, 0);
        this.item = this.navParams.data.item;
    }
    BloodPreasurePage.prototype.ionViewDidLoad = function () { console.log('ionViewDidLoad BloodPreasurePage'); };
    // Button funcion to save the input Info
    BloodPreasurePage.prototype.saveInfo = function () {
        this.auth.currentUserInfo[this.item.name].shift();
        this.auth.currentUserInfo[this.item.name].push(this.bp);
        this.auth.update();
        this.navCtrl.pop();
    };
    // Button function to cancel the info
    BloodPreasurePage.prototype.cancelInfo = function () {
        this.navCtrl.pop();
    };
    BloodPreasurePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-blood-preasure',template:/*ion-inline-start:"/home/tung/Documents/learnIonic/Heart_Health/src/pages/blood-preasure/blood-preasure.html"*/'<ion-header>\n\n</ion-header>\n\n<ion-content class="no-scroll" padding>\n  <ion-list name="info">\n    <ion-item>\n      <ion-label floating>Systolic Blood Pressure</ion-label>\n      <ion-input type="text" id="high_pressure" value="" required\n                 ng-pattern="/^\d{2,3}$/"\n                 [(ngModel)]="this.bp.high_pressure">\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Diastolic Blood Pressure</ion-label>\n      <ion-input type="text" id="low_pressure" value="" required\n                 ng-pattern="/^\d{2,3}$/"\n                 [(ngModel)]="this.bp.low_pressure">\n      </ion-input>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button class="btn" ion-button color="primary" full  (click)="saveInfo()">Update</button>\n    <button class="btn" ion-button color="primary" full (click)="cancelInfo()">Cancel</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/tung/Documents/learnIonic/Heart_Health/src/pages/blood-preasure/blood-preasure.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], BloodPreasurePage);
    return BloodPreasurePage;
}());

//# sourceMappingURL=blood-preasure.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeDoctorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    // Button function to update doctor change
    ChangeDoctorPage.prototype.updateDr = function () {
        this.auth.currentUserInfo.doctor = this.Doctor;
        this.auth.update();
        this.navCtrl.pop();
    };
    //Button function to cancel
    ChangeDoctorPage.prototype.cancelUpdateDr = function () {
        this.navCtrl.pop();
    };
    ChangeDoctorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-change-doctor',template:/*ion-inline-start:"/home/tung/Documents/learnIonic/Heart_Health/src/pages/change-doctor/change-doctor.html"*/'<ion-header>\n\n</ion-header>\n\n\n<ion-content class="no-scroll" padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Doctor Name</ion-label>\n      <ion-input type="text" value="" required\n                 [(ngModel)]="this.Doctor.docName">\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Phone Number</ion-label>\n      <ion-input type="text" value="" required\n                 [(ngModel)]="this.Doctor.phoneNumber">\n      </ion-input>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button class="btn" ion-button color="primary" full  (click)="updateDr()">Update</button>\n    <button class="btn" ion-button color="primary" full (click)="cancelUpdateDr()">Cancel</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/tung/Documents/learnIonic/Heart_Health/src/pages/change-doctor/change-doctor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], ChangeDoctorPage);
    return ChangeDoctorPage;
}());

//# sourceMappingURL=change-doctor.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorGetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(177);
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



var DoctorGetPage = /** @class */ (function () {
    function DoctorGetPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.info = navParams.data.info;
        console.log(this.info);
        this.getScore();
    }
    // Add algorithm to score the health status of user
    DoctorGetPage.prototype.getScore = function () {
        this.score = [4, 4, 4, 4, 4];
        for (var i in this.score) {
            this.score[i] = this.score[i] + Math.round(Math.random() * 6);
        }
    };
    DoctorGetPage.prototype.showHealthScore = function () {
        this.HealthEL = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.Health.nativeElement, {
            type: 'radar',
            data: {
                labels: ["Heart Rate", "Blood Pressure", "Emotion", "BMI", "Medicine Take"],
                datasets: [{
                        borderColor: "#E63135",
                        backgroundColor: "rgba(220,220,220,0.5)",
                        data: this.score
                    }]
            },
            options: {
                legend: {
                    display: false
                },
                responsive: true,
                title: {
                    display: false,
                    text: 'Patient Healt'
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
        this.showHealthScore();
        console.log('ionViewDidLoad DoctorGetPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('Health'),
        __metadata("design:type", Object)
    ], DoctorGetPage.prototype, "Health", void 0);
    DoctorGetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-doctor-get',template:/*ion-inline-start:"/home/tung/Documents/learnIonic/Heart_Health/src/pages/doctor-get/doctor-get.html"*/'<ion-header>\n\n</ion-header>\n\n\n<ion-content class="no-scroll" padding>\n  <ion-list>\n    <ion-item>\n      Name:         {{this.info.user.name}}\n    </ion-item>\n    <ion-item>\n      E-mail:      {{this.info.user.email}}\n    </ion-item>\n    <ion-label>Medicine List:</ion-label>\n    <ion-item *ngFor="let medicine of this.info.medicineList;">\n     {{medicine.medName}}\n    </ion-item>\n  </ion-list>\n  <ion-card>\n    <ion-card-header class="header">\n      Patient Health Score\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #Health></canvas>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/tung/Documents/learnIonic/Heart_Health/src/pages/doctor-get/doctor-get.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], DoctorGetPage);
    return DoctorGetPage;
}());

//# sourceMappingURL=doctor-get.js.map

/***/ }),

/***/ 133:
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
webpackEmptyAsyncContext.id = 133;

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Info__ = __webpack_require__(113);
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
    function AuthServiceProvider(http) {
        this.http = http;
        this.currentUserInfo = new __WEBPACK_IMPORTED_MODULE_4__Info__["b" /* Info */]();
        // browser
        // API_URL: string = "http://localhost:8080/api/";
        // test mechine local wifi ip
        // API_URL: string = "http://10.19.202.128:8080/api/";
        // android studio emulator
        this.API_URL = "http://10.0.2.2:8080/api/";
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
        this.http.post(this.API_URL + 'save', this.userInfo).subscribe();
        console.info(this.userInfo);
        return;
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-new-medicine/add-new-medicine.module": [
		467,
		16
	],
	"../pages/article/article.module": [
		469,
		15
	],
	"../pages/blood-preasure/blood-preasure.module": [
		473,
		14
	],
	"../pages/change-doctor/change-doctor.module": [
		474,
		13
	],
	"../pages/chart/chart.module": [
		468,
		12
	],
	"../pages/doctor-get/doctor-get.module": [
		476,
		11
	],
	"../pages/heart-rate/heart-rate.module": [
		472,
		10
	],
	"../pages/home/home.module": [
		478,
		2
	],
	"../pages/login/login.module": [
		479,
		1
	],
	"../pages/medicine-detail/medicine-detail.module": [
		465,
		9
	],
	"../pages/medicine-list/medicine-list.module": [
		466,
		8
	],
	"../pages/medicine/medicine.module": [
		471,
		7
	],
	"../pages/profile/profile.module": [
		475,
		6
	],
	"../pages/register/register.module": [
		480,
		0
	],
	"../pages/setting/setting.module": [
		477,
		5
	],
	"../pages/splash/splash.module": [
		464,
		4
	],
	"../pages/user-manual/user-manual.module": [
		470,
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
webpackAsyncContext.id = 175;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__medicine_list_medicine_list__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_new_medicine_add_new_medicine__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chart_chart__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__article_article__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_manual_user_manual__ = __webpack_require__(119);
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











var MedicinePage = /** @class */ (function () {
    function MedicinePage(navCtrl, barcodeScanner, auth, http) {
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
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
    MedicinePage.prototype.qrCode = function () {
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
                        return [4 /*yield*/, this.barcodeScanner
                                .encode(this.barcodeScanner.Encode.TEXT_TYPE, code).then(function (encodedData) {
                                console.log(encodedData);
                                _this.result = encodedData;
                            }, function (err) {
                                console.log("Error occured : " + err);
                            })];
                    case 2:
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
            selector: 'page-medicine',template:/*ion-inline-start:"/home/tung/Documents/learnIonic/Heart_Health/src/pages/medicine/medicine.html"*/'<ion-header>\n\n</ion-header>\n\n\n\n<ion-content class="no-scroll" id="quick_acc">\n  <div id="content">\n    <ion-fab center middle>\n\n      <button ion-fab color="primary"><ion-icon name="heart"></ion-icon></button>\n      <ion-fab-list side="top">\n        <button ion-fab color="red_dark"><ion-icon name="add" (click)="scanBarcode()"></ion-icon></button>\n      </ion-fab-list>\n      <ion-fab-list side="left">\n        <button ion-fab color="light"><ion-icon name="card" (click)="qrCode()" ></ion-icon></button>\n      </ion-fab-list>\n      <ion-fab-list side="right">\n        <button ion-fab color="dark"><ion-icon name="analytics" (click)="showChart()"></ion-icon></button>\n      </ion-fab-list>\n    </ion-fab>\n  </div>\n\n  <div class="card-background-page">\n\n    <ion-card (click)="showMedcines()">\n      <img src="assets/img/My-Medicines.jpg"/>\n      <div class="card-title">My Medicines</div>\n      <div class="card-subtitle">Check your medicines</div>\n    </ion-card>\n\n    <ion-card (click)="showTips()">\n      <img src="assets/img/Health-Tips.jpg"/>\n      <div class="card-title">Health Tips</div>\n      <div class="card-subtitle">Health Tips from Doctor</div>\n    </ion-card>\n\n    <ion-card (click)="showInfo()">\n      <img src="assets/img/Information.jpg"/>\n      <div class="card-title">Information</div>\n      <div class="card-subtitle">User Manual</div>\n    </ion-card>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/home/tung/Documents/learnIonic/Heart_Health/src/pages/medicine/medicine.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__heart_rate_heart_rate__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blood_preasure_blood_preasure__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chart_chart__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__change_doctor_change_doctor__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








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
            selector: 'page-profile',template:/*ion-inline-start:"/home/tung/Documents/learnIonic/Heart_Health/src/pages/profile/profile.html"*/'<ion-header>\n\n</ion-header>\n\n\n<ion-content class="no-scroll" padding>\n  <ion-card>\n\n    <ion-item>\n      <h2>{{auth.currentUserInfo.doctor.docName}}</h2>\n    </ion-item>\n    <img src="assets/img/doctor_yui2.jpg">\n\n    <ion-row>\n      <ion-col>\n        <button class="small-btn" ion-button\n                icon-left clear small (press)="makeCall()">\n          <ion-icon name="call"></ion-icon>\n          <div>Make Call</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button class="small-btn" ion-button\n                icon-left clear small (click)="resetPhone()">\n          <ion-icon name="settings"></ion-icon>\n          <div>Change Number </div>\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n  <ion-list>\n    <button ion-item *ngFor="let item of items"\n            (click)="openNavDetailsPage(item)" icon-start>\n      <ion-icon [name]="item.iconN"\n                [ngStyle]="{\'color\': item.color}"\n                item-start>\n      </ion-icon>\n      {{ item.title }}\n      <ion-icon name="arrow-dropright-circle" class="custom-icon" item-end>\n      </ion-icon>\n    </button>\n    <button ion-item (click)="openBPDetailsPage(bp)" icon-start>\n      <ion-icon [name]="bp.iconN" [ngStyle]="{\'color\': bp.color}" item-start>\n      </ion-icon>\n      {{ bp.title }}\n      <ion-icon name="arrow-dropright-circle" class="custom-icon" item-end>\n      </ion-icon>\n    </button>\n    <button ion-button class="btn" round clear (click)="goChart()">\n       Show Health Log <ion-icon name="arrow-dropright-circle" class="fig" itemid>\n    </ion-icon>\n    </button>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/tung/Documents/learnIonic/Heart_Health/src/pages/profile/profile.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doctor_get_doctor_get__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(17);
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
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"/home/tung/Documents/learnIonic/Heart_Health/src/pages/setting/setting.html"*/'<ion-header>\n\n</ion-header>\n\n\n<ion-content class="no-scroll" padding>\n\n  <button ion-button color="primary" block class="btn" (click)="scanBarcode()">\n    I\'m Doctor\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"/home/tung/Documents/learnIonic/Heart_Health/src/pages/setting/setting.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(363);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_local_notifications__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_service_auth_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_medicine_medicine__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_setting_setting__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_splash_splash__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_heart_rate_heart_rate__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_medicine_list_medicine_list__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_medicine_detail_medicine_detail__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_add_new_medicine_add_new_medicine__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_blood_preasure_blood_preasure__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_chart_chart__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_doctor_get_doctor_get__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_article_article__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_user_manual_user_manual__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_change_doctor_change_doctor__ = __webpack_require__(122);
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

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 181,
	"./af.js": 181,
	"./ar": 182,
	"./ar-dz": 183,
	"./ar-dz.js": 183,
	"./ar-kw": 184,
	"./ar-kw.js": 184,
	"./ar-ly": 185,
	"./ar-ly.js": 185,
	"./ar-ma": 186,
	"./ar-ma.js": 186,
	"./ar-sa": 187,
	"./ar-sa.js": 187,
	"./ar-tn": 188,
	"./ar-tn.js": 188,
	"./ar.js": 182,
	"./az": 189,
	"./az.js": 189,
	"./be": 190,
	"./be.js": 190,
	"./bg": 191,
	"./bg.js": 191,
	"./bn": 192,
	"./bn.js": 192,
	"./bo": 193,
	"./bo.js": 193,
	"./br": 194,
	"./br.js": 194,
	"./bs": 195,
	"./bs.js": 195,
	"./ca": 196,
	"./ca.js": 196,
	"./cs": 197,
	"./cs.js": 197,
	"./cv": 198,
	"./cv.js": 198,
	"./cy": 199,
	"./cy.js": 199,
	"./da": 200,
	"./da.js": 200,
	"./de": 201,
	"./de-at": 202,
	"./de-at.js": 202,
	"./de-ch": 203,
	"./de-ch.js": 203,
	"./de.js": 201,
	"./dv": 204,
	"./dv.js": 204,
	"./el": 205,
	"./el.js": 205,
	"./en-au": 206,
	"./en-au.js": 206,
	"./en-ca": 207,
	"./en-ca.js": 207,
	"./en-gb": 208,
	"./en-gb.js": 208,
	"./en-ie": 209,
	"./en-ie.js": 209,
	"./en-nz": 210,
	"./en-nz.js": 210,
	"./eo": 211,
	"./eo.js": 211,
	"./es": 212,
	"./es-do": 213,
	"./es-do.js": 213,
	"./es.js": 212,
	"./et": 214,
	"./et.js": 214,
	"./eu": 215,
	"./eu.js": 215,
	"./fa": 216,
	"./fa.js": 216,
	"./fi": 217,
	"./fi.js": 217,
	"./fo": 218,
	"./fo.js": 218,
	"./fr": 219,
	"./fr-ca": 220,
	"./fr-ca.js": 220,
	"./fr-ch": 221,
	"./fr-ch.js": 221,
	"./fr.js": 219,
	"./fy": 222,
	"./fy.js": 222,
	"./gd": 223,
	"./gd.js": 223,
	"./gl": 224,
	"./gl.js": 224,
	"./gom-latn": 225,
	"./gom-latn.js": 225,
	"./he": 226,
	"./he.js": 226,
	"./hi": 227,
	"./hi.js": 227,
	"./hr": 228,
	"./hr.js": 228,
	"./hu": 229,
	"./hu.js": 229,
	"./hy-am": 230,
	"./hy-am.js": 230,
	"./id": 231,
	"./id.js": 231,
	"./is": 232,
	"./is.js": 232,
	"./it": 233,
	"./it.js": 233,
	"./ja": 234,
	"./ja.js": 234,
	"./jv": 235,
	"./jv.js": 235,
	"./ka": 236,
	"./ka.js": 236,
	"./kk": 237,
	"./kk.js": 237,
	"./km": 238,
	"./km.js": 238,
	"./kn": 239,
	"./kn.js": 239,
	"./ko": 240,
	"./ko.js": 240,
	"./ky": 241,
	"./ky.js": 241,
	"./lb": 242,
	"./lb.js": 242,
	"./lo": 243,
	"./lo.js": 243,
	"./lt": 244,
	"./lt.js": 244,
	"./lv": 245,
	"./lv.js": 245,
	"./me": 246,
	"./me.js": 246,
	"./mi": 247,
	"./mi.js": 247,
	"./mk": 248,
	"./mk.js": 248,
	"./ml": 249,
	"./ml.js": 249,
	"./mr": 250,
	"./mr.js": 250,
	"./ms": 251,
	"./ms-my": 252,
	"./ms-my.js": 252,
	"./ms.js": 251,
	"./my": 253,
	"./my.js": 253,
	"./nb": 254,
	"./nb.js": 254,
	"./ne": 255,
	"./ne.js": 255,
	"./nl": 256,
	"./nl-be": 257,
	"./nl-be.js": 257,
	"./nl.js": 256,
	"./nn": 258,
	"./nn.js": 258,
	"./pa-in": 259,
	"./pa-in.js": 259,
	"./pl": 260,
	"./pl.js": 260,
	"./pt": 261,
	"./pt-br": 262,
	"./pt-br.js": 262,
	"./pt.js": 261,
	"./ro": 263,
	"./ro.js": 263,
	"./ru": 264,
	"./ru.js": 264,
	"./sd": 265,
	"./sd.js": 265,
	"./se": 266,
	"./se.js": 266,
	"./si": 267,
	"./si.js": 267,
	"./sk": 268,
	"./sk.js": 268,
	"./sl": 269,
	"./sl.js": 269,
	"./sq": 270,
	"./sq.js": 270,
	"./sr": 271,
	"./sr-cyrl": 272,
	"./sr-cyrl.js": 272,
	"./sr.js": 271,
	"./ss": 273,
	"./ss.js": 273,
	"./sv": 274,
	"./sv.js": 274,
	"./sw": 275,
	"./sw.js": 275,
	"./ta": 276,
	"./ta.js": 276,
	"./te": 277,
	"./te.js": 277,
	"./tet": 278,
	"./tet.js": 278,
	"./th": 279,
	"./th.js": 279,
	"./tl-ph": 280,
	"./tl-ph.js": 280,
	"./tlh": 281,
	"./tlh.js": 281,
	"./tr": 282,
	"./tr.js": 282,
	"./tzl": 283,
	"./tzl.js": 283,
	"./tzm": 284,
	"./tzm-latn": 285,
	"./tzm-latn.js": 285,
	"./tzm.js": 284,
	"./uk": 286,
	"./uk.js": 286,
	"./ur": 287,
	"./ur.js": 287,
	"./uz": 288,
	"./uz-latn": 289,
	"./uz-latn.js": 289,
	"./uz.js": 288,
	"./vi": 290,
	"./vi.js": 290,
	"./x-pseudo": 291,
	"./x-pseudo.js": 291,
	"./yo": 292,
	"./yo.js": 292,
	"./zh-cn": 293,
	"./zh-cn.js": 293,
	"./zh-hk": 294,
	"./zh-hk.js": 294,
	"./zh-tw": 295,
	"./zh-tw.js": 295
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
webpackContext.id = 427;

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeartLink; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_splash_splash__ = __webpack_require__(114);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/tung/Documents/learnIonic/Heart_Health/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/tung/Documents/learnIonic/Heart_Health/src/app/app.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(177);
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('Emotion'),
        __metadata("design:type", Object)
    ], ChartPage.prototype, "Emotion", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('BP'),
        __metadata("design:type", Object)
    ], ChartPage.prototype, "BP", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('heart_rate'),
        __metadata("design:type", Object)
    ], ChartPage.prototype, "heart_rate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('bmi'),
        __metadata("design:type", Object)
    ], ChartPage.prototype, "bmi", void 0);
    ChartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-chart',template:/*ion-inline-start:"/home/tung/Documents/learnIonic/Heart_Health/src/pages/chart/chart.html"*/'<ion-header>\n\n</ion-header>\n\n\n<ion-content class="no-scroll" padding>\n  <ion-card>\n    <ion-card-header class="header">\n      Heart Rate\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #heart_rate></canvas>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header class="header">\n      Blood Pressure\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #BP></canvas>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header class="header">\n      BMI\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #bmi></canvas>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header class="header">\n      Emotion\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #Emotion></canvas>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/tung/Documents/learnIonic/Heart_Health/src/pages/chart/chart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], ChartPage);
    return ChartPage;
}());

//# sourceMappingURL=chart.js.map

/***/ })

},[340]);
//# sourceMappingURL=main.js.map