import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerSideComponent } from './drawer-side.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

describe('DrawerSideComponent', () => {
  let component: DrawerSideComponent;
  let fixture: ComponentFixture<DrawerSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSidenavModule,
        MatCardModule,
        MatIconModule
      ],
      declarations: [ DrawerSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
