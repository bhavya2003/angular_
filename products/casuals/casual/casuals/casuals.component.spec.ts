import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasualsComponent } from './casuals.component';

describe('CasualsComponent', () => {
  let component: CasualsComponent;
  let fixture: ComponentFixture<CasualsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasualsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
