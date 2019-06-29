/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AngularTechnologyComponent } from './angular-technology.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line:max-line-length
import { MatGridListModule, MatButtonModule, MatCardModule, MatDividerModule, MatListModule, MatStepperModule, MatSlideToggleModule } from '@angular/material';
import { PortalModule } from '@angular/cdk/portal';

describe('AngularTechnologyComponent', () => {
  let component: AngularTechnologyComponent;
  let fixture: ComponentFixture<AngularTechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatGridListModule,
        MatButtonModule,
        MatCardModule,
        PortalModule,
        MatDividerModule,
        MatListModule,
        MatStepperModule,
        MatSlideToggleModule
      ],
      declarations: [ AngularTechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
