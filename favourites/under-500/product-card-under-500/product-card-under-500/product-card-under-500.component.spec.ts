import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardUnder500Component } from './product-card-under-500.component';

describe('ProductCardUnder500Component', () => {
  let component: ProductCardUnder500Component;
  let fixture: ComponentFixture<ProductCardUnder500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardUnder500Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardUnder500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
