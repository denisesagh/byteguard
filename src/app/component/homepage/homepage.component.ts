import {Component, ViewChild} from '@angular/core';
import {async, identity} from "rxjs";
import {animate, state, style, transition, trigger} from "@angular/animations";


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],

})
export class HomepageComponent {
  @ViewChild(HomepageComponent) homepageComponent!: HomepageComponent;
  public showAboutUs: boolean;
  public showProducts: boolean;
  public showContact: boolean;
  public showFaq: boolean;



  constructor() {
    this.showAboutUs = true;
    this.showProducts = false;
    this.showContact = false;
    this.showFaq = false;
    sessionStorage.setItem('formSend', 'false');
  }






  async openBody(bodyToOpen: string): Promise<void> {
    this.showAboutUs = bodyToOpen == 'AboutUs';
    this.showProducts = bodyToOpen == 'Products';
    this.showContact = bodyToOpen == 'Contact';
    this.showFaq = bodyToOpen == 'FAQ';

    const productsElement = document.getElementById('products');
    const aboutUsElement = document.getElementById('aboutUs');
    const contactElement = document.getElementById('contact');
    const faqElement = document.getElementById('faq');


    if (this.showProducts && productsElement) {
      productsElement.style.textDecoration = 'underline';
    }
    if (!this.showProducts && productsElement) {
      productsElement.style.textDecoration = 'none';
    }
    if (this.showAboutUs && aboutUsElement) {
      aboutUsElement.style.textDecoration = 'underline';
    }
    if (!this.showAboutUs && aboutUsElement) {
      aboutUsElement.style.textDecoration = 'none';
    }
    if (this.showContact && contactElement) {
      contactElement.style.textDecoration = 'underline';
    }
    if (!this.showContact && contactElement) {
      contactElement.style.textDecoration = 'none';
    }
    if (this.showFaq && faqElement) {
      faqElement.style.textDecoration = 'underline';
    }
    if (!this.showFaq && faqElement) {
      faqElement.style.textDecoration = 'none';
    }
  }

}
