import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardCoatsComponent } from './product-card-coats.component';

describe('ProductCardCoatsComponent', () => {
  let component: ProductCardCoatsComponent;
  let fixture: ComponentFixture<ProductCardCoatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardCoatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardCoatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
