import { Component } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-websiten',
  templateUrl: './websiten.component.html',
  styleUrls: ['./websiten.component.css', '../../../app.component.css'],
  animations: [
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),

    ])
  ]
})
export class WebsitenComponent {
  backbutton: string;
  constructor() {
    this.backbutton = "/assets/back_button.png";
  }
}
