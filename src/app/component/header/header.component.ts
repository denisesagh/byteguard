import {Component, ElementRef} from '@angular/core';
import {AboutusComponent} from "../aboutus/aboutus.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor() {
  }

  underLine(text: String) {

    const aboutUsText = document.getElementById('aboutUs') || null;
    const productsText = document.getElementById('products') || null;
    const contactUsText = document.getElementById('contact') || null;

    if(aboutUsText && productsText && contactUsText) {
      switch (text) {
        case 'aboutUs':
          aboutUsText.style.textDecoration = 'underline';
          productsText.style.textDecoration = 'none';
          contactUsText.style.textDecoration = 'none';
          break;
        case 'products':
          aboutUsText.style.textDecoration = 'none';
          productsText.style.textDecoration = 'underline';
          contactUsText.style.textDecoration = 'none';
          break;
        case 'contact':
          aboutUsText.style.textDecoration = 'none';
          productsText.style.textDecoration = 'none';
          contactUsText.style.textDecoration = 'underline';
      }
    }
  }
}
