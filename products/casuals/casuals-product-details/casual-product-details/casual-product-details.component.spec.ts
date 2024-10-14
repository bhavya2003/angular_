import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasualProductDetailsComponent } from './casual-product-details.component';

describe('CasualProductDetailsComponent', () => {
  let component: CasualProductDetailsComponent;
  let fixture: ComponentFixture<CasualProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasualProductDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasualProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
