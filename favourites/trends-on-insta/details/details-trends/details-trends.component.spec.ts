import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTrendsComponent } from './details-trends.component';

describe('DetailsTrendsComponent', () => {
  let component: DetailsTrendsComponent;
  let fixture: ComponentFixture<DetailsTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsTrendsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
