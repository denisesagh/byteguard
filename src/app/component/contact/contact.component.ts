import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UploadServiceService} from "../../services/uploadSerivce/upload-service.service";
import {ContactDialogComponent} from "../contact-dialog/contact-dialog.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {style, transition, trigger, animate} from "@angular/animations";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../../app.component.css'],
})
export class ContactComponent implements OnInit {

  captcha: string;
  FormData: FormGroup;
  dialogConfig: MatDialogConfig;



  constructor(private builder: FormBuilder, private uploadService: UploadServiceService, private dialog: MatDialog) {
    this.FormData = this.builder.group({
      firstname: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      companyname: new FormControl('', [Validators.nullValidator]),
      topic: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
    })
    this.captcha = '';

    this.dialogConfig = new MatDialogConfig();
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
    this.dialogConfig.width = '400px';
    this.dialogConfig.height = '200px';
    this.dialogConfig.panelClass = 'custom-dialog-class'; // Füge eine benutzerdefinierte Klasse hinzu
    this.dialogConfig.hasBackdrop = true; // Füge eine benutzerdefinierte Klasse hinzu

  }

  ngOnInit(): void {



  }


  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    this.captcha = captchaResponse;


    document.getElementById('submit')?.removeAttribute('disabled');
  }

  async openDialog(): Promise<void> {
    let dialogRef = this.dialog.open(ContactDialogComponent, {
      width: '250px',
      height: '250px',
      hasBackdrop: true,
      panelClass: 'custom-dialog-class'

    });
  }

  onsubmit(formData: FormGroup) {
    const firstname = formData.get('firstname')?.value;
    const surname = formData.get('surname')?.value;
    const companyname = formData.get('companyname')?.value;
    const topic = formData.get('topic')?.value;
    const email = formData.get('email')?.value;
    const message = formData.get('message')?.value;



    console.log(firstname, surname, companyname, topic, email, message)

    if (this.captcha === '') {
      alert('Bitte Captcha ausfüllen')
      return;
    }if(firstname === '' || surname === '' || topic === '' || email === '' || message === ''){
      alert('Bitte alle Pflichtfelder ausfüllen')
      return;
    }else{
      this.uploadService.uploadData(firstname, surname, companyname, topic, email, message).then(() =>
        this.openDialog())
          .catch(err => alert("Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.")).then();
    }

  }



}
