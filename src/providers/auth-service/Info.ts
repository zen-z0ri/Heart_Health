export class MedicineInfo {
  medName: string;
  barcode: number;
  medInfo: string;
  timeList: Array<string> = new Array();
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

export class Info {
  _id: string;
  user: User;
  medicineList: [MedicineInfo];
  heart_rate: [Number];
  bmi: [Number];
  doctor: Doctor;
  BP: [String];
  Emotion: [Number];
}
