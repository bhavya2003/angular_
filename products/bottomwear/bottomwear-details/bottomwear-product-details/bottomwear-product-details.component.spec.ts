import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomwearProductDetailsComponent } from './bottomwear-product-details.component';

describe('BottomwearProductDetailsComponent', () => {
  let component: BottomwearProductDetailsComponent;
  let fixture: ComponentFixture<BottomwearProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomwearProductDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomwearProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
