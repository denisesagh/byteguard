import {Component, ViewChild} from '@angular/core';
import {async} from "rxjs";


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
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
  }


  async openBody(bodyToOpen: string): Promise<void> {
    this.showAboutUs = bodyToOpen == 'AboutUs';
    this.showProducts = bodyToOpen == 'Products';
    this.showContact = bodyToOpen == 'Contact';
    this.showFaq = bodyToOpen == 'FAQ';
  }
}
