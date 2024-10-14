import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasualProductCardsComponent } from './casual-product-cards.component';

describe('CasualProductCardsComponent', () => {
  let component: CasualProductCardsComponent;
  let fixture: ComponentFixture<CasualProductCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasualProductCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasualProductCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
