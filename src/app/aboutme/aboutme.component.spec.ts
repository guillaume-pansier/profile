import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { of } from 'rxjs';
import { AboutmeComponent } from './aboutme.component';
import { DrawerSideComponent } from './drawer-side/drawer-side.component';
import { ProfileService } from './event.service';
import { TimedEventComponent } from './timed-event/timed-event.component';



class EventServiceStub {
  getProfile() {
    return of();
  }
}

describe('AboutmeComponent', () => {
  let component: AboutmeComponent;
  let fixture: ComponentFixture<AboutmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatCardModule ],
      declarations: [ AboutmeComponent, DrawerSideComponent ],
      providers: [
        { provide: ProfileService, useClass: EventServiceStub}
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .overrideTemplate(TimedEventComponent, '<div>my event </div>')
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
