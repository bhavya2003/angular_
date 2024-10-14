import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeesProductDetailsComponent } from './tees-product-details.component';

describe('TeesProductDetailsComponent', () => {
  let component: TeesProductDetailsComponent;
  let fixture: ComponentFixture<TeesProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeesProductDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeesProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
