import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UploadServiceService} from "../../services/uploadSerivce/upload-service.service";



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../../app.component.css']
})
export class ContactComponent implements OnInit {

  captcha: string;
  FormData: FormGroup;


  constructor(private builder: FormBuilder, private uploadService: UploadServiceService) {
    this.FormData = this.builder.group({
      firstname: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      companyname: new FormControl('', [Validators.nullValidator]),
      topic: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])

    })
    this.captcha = '';
  }

  ngOnInit(): void {



  }


  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    this.captcha = captchaResponse;
    document.getElementById('submit')?.removeAttribute('disabled');
  }


  onsubmit(formData: FormGroup) {
    const firstname = formData.get('firstname')?.value;
    const surname = formData.get('surname')?.value;
    const companyname = formData.get('companyname')?.value;
    const topic = formData.get('topic')?.value;
    const email = formData.get('email')?.value;
    const message = formData.get('message')?.value;

    console.log(firstname, surname, companyname, topic, email, message)

    this.uploadService.uploadData(firstname, surname, companyname, topic, email, message).then(() => console.log('Upload erfolgreich'))
      .catch(err => console.log(err));

  }



}
