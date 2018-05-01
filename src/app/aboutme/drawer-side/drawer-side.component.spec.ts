import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerSideComponent } from './drawer-side.component';

describe('DrawerSideComponent', () => {
  let component: DrawerSideComponent;
  let fixture: ComponentFixture<DrawerSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
