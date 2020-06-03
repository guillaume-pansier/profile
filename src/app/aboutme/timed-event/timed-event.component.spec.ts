import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimedEventComponent } from './timed-event.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatIconModule } from '@angular/material/icon';

describe('TimedEventComponent', () => {
  let component: TimedEventComponent;
  let fixture: ComponentFixture<TimedEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        OverlayModule,
        MatIconModule
      ],
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
