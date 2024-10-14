import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardHoodieComponent } from './product-card-hoodie.component';

describe('ProductCardHoodieComponent', () => {
  let component: ProductCardHoodieComponent;
  let fixture: ComponentFixture<ProductCardHoodieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardHoodieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardHoodieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
