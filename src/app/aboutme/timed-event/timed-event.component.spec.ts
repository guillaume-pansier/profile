import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimedEventComponent } from './timed-event.component';

describe('TimedEventComponent', () => {
  let component: TimedEventComponent;
  let fixture: ComponentFixture<TimedEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimedEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimedEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
