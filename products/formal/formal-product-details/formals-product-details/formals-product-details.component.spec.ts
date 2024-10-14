import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalsProductDetailsComponent } from './formals-product-details.component';

describe('FormalsProductDetailsComponent', () => {
  let component: FormalsProductDetailsComponent;
  let fixture: ComponentFixture<FormalsProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormalsProductDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormalsProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
