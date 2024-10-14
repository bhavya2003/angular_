import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TShirtsComponent } from './t-shirts.component';

describe('TShirtsComponent', () => {
  let component: TShirtsComponent;
  let fixture: ComponentFixture<TShirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TShirtsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TShirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
