import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalProductCardComponent } from './formal-product-card.component';

describe('FormalProductCardComponent', () => {
  let component: FormalProductCardComponent;
  let fixture: ComponentFixture<FormalProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormalProductCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormalProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
