import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterTestingModule } from '@angular/router/testing';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      imports: [
        MatToolbarModule,
        MatTabsModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain link to welcome', () => {
    expect(component.navLinks.find(value => value.path === 'welcome')).toBeTruthy();
  });

  it('should contain link to interests', () => {
    expect(component.navLinks.find(value => value.path === 'interests')).toBeTruthy();
  });

  it('should contain link to technologies', () => {
    expect(component.navLinks.find(value => value.path === 'technologies')).toBeTruthy();
  });

  it('should contain link to aboutme', () => {
    expect(component.navLinks.find(value => value.path === 'aboutme')).toBeTruthy();
  });
});
