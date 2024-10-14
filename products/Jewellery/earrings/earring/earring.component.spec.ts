import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarringComponent } from './earring.component';

describe('EarringComponent', () => {
  let component: EarringComponent;
  let fixture: ComponentFixture<EarringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EarringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
