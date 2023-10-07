import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsitenComponent } from './websiten.component';

describe('WebsitenComponent', () => {
  let component: WebsitenComponent;
  let fixture: ComponentFixture<WebsitenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebsitenComponent]
    });
    fixture = TestBed.createComponent(WebsitenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
