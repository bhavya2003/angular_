import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendsProductDetailsComponent } from './trends-product-details.component';

describe('TrendsProductDetailsComponent', () => {
  let component: TrendsProductDetailsComponent;
  let fixture: ComponentFixture<TrendsProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendsProductDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendsProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
