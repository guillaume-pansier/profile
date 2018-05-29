/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CountrySVGComponent } from './country-svg.component';

describe('CountrySVGComponent', () => {
  let component: CountrySVGComponent;
  let fixture: ComponentFixture<CountrySVGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrySVGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrySVGComponent);
    component = fixture.componentInstance;
    component.country = { pathSvgFormat: '<div>test</div>', id: 'countryId', name: 'countryName' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
