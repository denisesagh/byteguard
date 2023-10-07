import { Component } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-it-security',
  templateUrl: './it-security.component.html',
  styleUrls: ['./it-security.component.css', '../../../app.component.css'],
  animations: [
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),

    ])
  ]
})
export class ItSecurityComponent {

}
