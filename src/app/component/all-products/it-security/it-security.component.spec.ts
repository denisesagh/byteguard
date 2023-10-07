import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItSecurityComponent } from './it-security.component';

describe('ItSecurityComponent', () => {
  let component: ItSecurityComponent;
  let fixture: ComponentFixture<ItSecurityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItSecurityComponent]
    });
    fixture = TestBed.createComponent(ItSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
