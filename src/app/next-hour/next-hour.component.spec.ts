import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextHourComponent } from './next-hour.component';

describe('NextHourComponent', () => {
  let component: NextHourComponent;
  let fixture: ComponentFixture<NextHourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextHourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
