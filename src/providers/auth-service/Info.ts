export class MedicineInfo {
  medName: string;
  barcode: number;
  medInfo: string;
  conflictList: Array<number> ;
  timeList?: Array<string> = new Array();
  constructor(medName: string, barcode: number, medInfo: string) {
    this.medName = medName;
    this.barcode = barcode;
    this.medInfo = medInfo;
    this.conflictList = new Array();
    this.timeList = new Array();
  }
}
export class User {
  name: string;
  email?: string;
  password?: string;
  constructor (name: string, email: string, password: string){
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
export class Doctor{
  docName: string;
  phoneNumber: number;
  constructor (){
    this.docName = "";
    this.phoneNumber = 0;
  }
}
export class BloodPressure{
  high_pressure: number;
  low_pressure: number;
  constructor(high_pressure: number, low_pressure: number, ) {
    this.high_pressure = high_pressure;
    this.low_pressure = low_pressure;
  }
}
export class Info {
  _id?: string;
  user: User;
  medicineList: Array<MedicineInfo>;
  heart_rate: [number];
  bmi: [number];
  doctor: Doctor;
  BP: [BloodPressure];
  Emotion: [number];
}
