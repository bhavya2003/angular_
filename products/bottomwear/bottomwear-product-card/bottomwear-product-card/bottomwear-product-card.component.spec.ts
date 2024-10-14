import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomwearProductCardComponent } from './bottomwear-product-card.component';

describe('BottomwearProductCardComponent', () => {
  let component: BottomwearProductCardComponent;
  let fixture: ComponentFixture<BottomwearProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomwearProductCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomwearProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
