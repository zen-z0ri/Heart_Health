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
export class Health {
  HealthID: string;
  HealthVal: number;
  constructor(HealthID: string, HealthVal: number) {
    this.HealthID = HealthID;
    this.HealthVal = HealthVal;
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
export class Info {
  ID?: string;
  user: User;
  medicineList?: [MedicineInfo];
  healthInfo?: [Health];
}


@Injectable()
export class AuthServiceProvider {

  currentUserInfo: Info = new Info();
  API_URL: string = "http://localhost:8080/api/";
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
              console.log(data[0]._id);
              this.currentUserInfo.ID = data[0]._id;
              this.currentUserInfo.user = data[0].user;
              this.currentUserInfo.healthInfo = data[0].Health;
              this.currentUserInfo.medicineList = data[0].medicine;
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
