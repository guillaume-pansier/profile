import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { Observable, of } from 'rxjs';
import { AboutmeComponent } from './aboutme.component';
import { DrawerSideComponent } from './drawer-side/drawer-side.component';
import { EventService } from './event.service';
import { TimedEventDescriptionComponent } from './timed-event/timed-event-description/timed-event-description.component';
import { TimedEventComponent } from './timed-event/timed-event.component';



class EventServiceStub {
  getEvents() {
    return of([]);
  }
}

describe('AboutmeComponent', () => {
  let component: AboutmeComponent;
  let fixture: ComponentFixture<AboutmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatCardModule ],
      declarations: [ AboutmeComponent, DrawerSideComponent, TimedEventComponent, TimedEventDescriptionComponent ],
      providers: [
        { provide: EventService, useClass: EventServiceStub}
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
