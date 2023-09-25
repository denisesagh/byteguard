import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {

  constructor(private afs: AngularFirestore) { }

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
  }

}
