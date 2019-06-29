/* tslint:disable:no-unused-variable */
import { PortalModule } from '@angular/cdk/portal';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatCardModule, MatDividerModule, MatGridListModule, MatListModule, MatSlideToggleModule, MatStepperModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlaygroundComponent } from './playground.component';


describe('PlaygroundComponent', () => {
  let component: PlaygroundComponent;
  let fixture: ComponentFixture<PlaygroundComponent>;

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
      declarations: [ PlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
