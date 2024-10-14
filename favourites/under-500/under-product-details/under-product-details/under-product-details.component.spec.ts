import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderProductDetailsComponent } from './under-product-details.component';

describe('UnderProductDetailsComponent', () => {
  let component: UnderProductDetailsComponent;
  let fixture: ComponentFixture<UnderProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderProductDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
