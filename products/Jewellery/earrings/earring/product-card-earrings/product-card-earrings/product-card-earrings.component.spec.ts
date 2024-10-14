import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardEarringsComponent } from './product-card-earrings.component';

describe('ProductCardEarringsComponent', () => {
  let component: ProductCardEarringsComponent;
  let fixture: ComponentFixture<ProductCardEarringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardEarringsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardEarringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
