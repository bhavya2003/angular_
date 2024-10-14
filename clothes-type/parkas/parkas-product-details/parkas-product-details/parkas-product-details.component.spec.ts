import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkasProductDetailsComponent } from './parkas-product-details.component';

describe('ParkasProductDetailsComponent', () => {
  let component: ParkasProductDetailsComponent;
  let fixture: ComponentFixture<ParkasProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkasProductDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkasProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
