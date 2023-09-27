import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {AngularFireDatabase} from "@angular/fire/compat/database";

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {

  constructor(private afs: AngularFirestore, private db: AngularFireDatabase) { }

  /*
  uploadData(name: string, surname: string, companyname: string, topic: string, email: string, message: string) {

    const data = {
      Name: name,
      Nachname: surname,
      Firma: companyname,
      Email: email,
      Thema: topic,
      Nachricht: message
    };

    return this.afs.collection('ANFRAGEN').add(data);
  }*/


  uploadData(name: string, surname: string, companyname: string, topic: string, email: string, message: string) {
    const data = {
      Name: name,
      Nachname: surname,
      Firma: companyname,
      Email: email,
      Thema: topic,
      Nachricht: message
    };
    return this.db.list('ANFRAGEN').push(data);

  }

}
