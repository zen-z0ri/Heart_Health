export class MedicineInfo {
  medName: string;
  barcode: number;
  medInfo: string;
  conflictList: Array<number> = new Array();
  timeList?: Array<string> = new Array();

  constructor(medName: string, barcode: number, medInfo: string) {
    this.medName = medName;
    this.barcode = barcode;
    this.medInfo = medInfo;
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
  medicineList: [MedicineInfo];
  heart_rate: [number];
  bmi: [number];
  doctor: Doctor;
  BP: [BloodPressure];
  Emotion: [number];
  alarmList: [string];
}
