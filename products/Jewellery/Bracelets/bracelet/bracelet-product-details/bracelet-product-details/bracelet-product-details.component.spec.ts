import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BraceletProductDetailsComponent } from './bracelet-product-details.component';

describe('BraceletProductDetailsComponent', () => {
  let component: BraceletProductDetailsComponent;
  let fixture: ComponentFixture<BraceletProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BraceletProductDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BraceletProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
