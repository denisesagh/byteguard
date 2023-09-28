import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UploadServiceService} from "../../services/uploadSerivce/upload-service.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {style, transition, trigger, animate, state} from "@angular/animations";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../../app.component.css'],
  animations: [
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),

    ])
  ]
})
export class ContactComponent implements OnInit {
  captcha: string;
  FormData: FormGroup;
  sucess: boolean = false;



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

    if (sessionStorage.getItem('formSend') === 'true') {
      this.sucess = true;
    }
  }

  ngOnInit(): void {


  }


  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    this.captcha = captchaResponse;
    document.getElementById('submit')?.removeAttribute('disabled');
  }




  async sendSucess(): Promise<void> {
    sessionStorage.setItem('formSend', 'true');
    this.sucess = true;
  }

  onsubmit(formData: FormGroup) {
    const firstname = formData.get('firstname')?.value;
    const surname = formData.get('surname')?.value;
    let companyname = formData.get('companyname')?.value;
    const topic = formData.get('topic')?.value;
    const email = formData.get('email')?.value;
    const message = formData.get('message')?.value;



    console.log(firstname, surname, companyname, topic, email, message)

    if (companyname === '') {
      companyname = 'Keine Angabe'
    }
    if (this.captcha === '') {
      alert('Bitte Captcha ausfüllen')
      return;
    }if(firstname === '' || surname === '' || topic === '' || email === '' || message === ''){
      alert('Bitte alle Pflichtfelder ausfüllen')
      return;
    }else{
      this.uploadService.uploadData(firstname, surname, companyname, topic, email, message).then(() =>
        this.sendSucess())
          .catch(err => alert("Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.")).then();
    }

  }



}
