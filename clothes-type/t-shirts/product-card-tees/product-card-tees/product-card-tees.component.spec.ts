import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardTeesComponent } from './product-card-tees.component';

describe('ProductCardTeesComponent', () => {
  let component: ProductCardTeesComponent;
  let fixture: ComponentFixture<ProductCardTeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardTeesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardTeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
