import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareSolutionsComponent } from './software-solutions.component';

describe('SoftwareSolutionsComponent', () => {
  let component: SoftwareSolutionsComponent;
  let fixture: ComponentFixture<SoftwareSolutionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoftwareSolutionsComponent]
    });
    fixture = TestBed.createComponent(SoftwareSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
