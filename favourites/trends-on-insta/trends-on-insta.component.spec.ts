import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendsOnInstaComponent } from './trends-on-insta.component';

describe('TrendsOnInstaComponent', () => {
  let component: TrendsOnInstaComponent;
  let fixture: ComponentFixture<TrendsOnInstaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendsOnInstaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendsOnInstaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
