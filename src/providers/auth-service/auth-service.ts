import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

export class MedicineInfo {
  medName: string;
  barcode: string;
  medInfo: string;
  constructor(medName: string, barcode: string, medInfo: string) {
    this.medName = medName;
    this.barcode = barcode;
    this.medInfo = medInfo;
  }
}
export class User {
  name: string;
  email: string;
  password: string;
  constructor (name: string, email: string, password: string){
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
export class Doctor{
  docName: string;
  phoneNumber: number;
}

export class Info {
  ID: string;
  user: User;
  medcineList: [MedicineInfo];
  heart_rate: [Number];
  bmi: [Number];
  doctor: Doctor;
  BP: [String];
  Emotion: [Number];
}

@Injectable()
export class AuthServiceProvider {
  currentUserInfo: Info = new Info();
  API_URL: string = "http://localhost:8080/api/";
  // API_URL: string = "http://10.0.2.2:8080/api/";
  constructor(private http: Http) {
  }

  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    }else if(credentials.email === null || credentials.password === null){

    }else {
      return Observable.create(observer => {
        // fix to add more code to check login
        //root pass word
        this.http.get(this.API_URL+'login?name='+credentials.name+"&password="+credentials.password)
          .map(res => res.json())
          .subscribe(data =>{
            console.log(data);
            if (data.length === 0){
              let access = false;
              observer.next(access);
              observer.complete();
            }else{
              this.currentUserInfo.ID = data[0]._id;
              this.currentUserInfo.user = data[0].user;
              this.currentUserInfo.heart_rate = data[0].heart_rate;
              this.currentUserInfo.bmi = data[0].bmi;
              this.currentUserInfo.BP = data[0].BP;
              this.currentUserInfo.Emotion = data[0].Emotion;
              this.currentUserInfo.doctor = data[0].doctor;
              this.currentUserInfo.medcineList = data[0].medicine;
              console.log(this.currentUserInfo);
              let access = (this.currentUserInfo!==null||this.currentUserInfo!== undefined);
              observer.next(access);
              observer.complete();
            }
          });
      });
    }
  }
  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // add code to connect the DB
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

  public get userInfo(): Info {
    return this.currentUserInfo;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUserInfo = null;
      observer.next(true);
      observer.complete();
    });
  }


}
