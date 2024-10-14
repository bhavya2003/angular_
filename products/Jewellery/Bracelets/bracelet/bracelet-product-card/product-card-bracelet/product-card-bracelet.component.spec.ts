import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardBraceletComponent } from './product-card-bracelet.component';

describe('ProductCardBraceletComponent', () => {
  let component: ProductCardBraceletComponent;
  let fixture: ComponentFixture<ProductCardBraceletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardBraceletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardBraceletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
