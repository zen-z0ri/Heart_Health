import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Info} from "./Info";


@Injectable()
export class AuthServiceProvider {
  currentUserInfo: Info = new Info();

  // API_URL: string = "http://localhost:8080/api/";
  // API_URL: string = "http://10.19.202.128:8080/api/";
  API_URL: string = "http://10.0.2.2:8080/api/";
  constructor(private http: Http) {
  }

  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    }else {
      return Observable.create(observer => {
        this.http.get(this.API_URL+'login?name='+credentials.name+"&password="+credentials.password)
          .map(res => res.json())
          .subscribe(data =>{
            if (data.length === 0){
              let access = false;
              observer.next(access);
              observer.complete();
            }else{
              this.currentUserInfo = data[0];
              let access = (this.currentUserInfo!==null||this.currentUserInfo!== undefined);
              observer.next(access);
              observer.complete();
            }
          });
      });
    }
  }

  public register(infoNew) {
    if (infoNew.email === null || infoNew.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      this.http.post(this.API_URL+"create", infoNew).subscribe();
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
  public update(){
    this.http.post(this.API_URL+'save',this.userInfo).subscribe();
    return;

  }


}
