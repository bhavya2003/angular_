import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarringsProductDetailsComponent } from './earrings-product-details.component';

describe('EarringsProductDetailsComponent', () => {
  let component: EarringsProductDetailsComponent;
  let fixture: ComponentFixture<EarringsProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EarringsProductDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarringsProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
