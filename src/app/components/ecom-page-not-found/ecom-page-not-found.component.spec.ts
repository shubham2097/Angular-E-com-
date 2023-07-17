import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomPageNotFoundComponent } from './ecom-page-not-found.component';

describe('EcomPageNotFoundComponent', () => {
  let component: EcomPageNotFoundComponent;
  let fixture: ComponentFixture<EcomPageNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcomPageNotFoundComponent]
    });
    fixture = TestBed.createComponent(EcomPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
