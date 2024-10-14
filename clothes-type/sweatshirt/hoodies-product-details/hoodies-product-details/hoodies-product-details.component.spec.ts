import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoodiesProductDetailsComponent } from './hoodies-product-details.component';

describe('HoodiesProductDetailsComponent', () => {
  let component: HoodiesProductDetailsComponent;
  let fixture: ComponentFixture<HoodiesProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoodiesProductDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoodiesProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
