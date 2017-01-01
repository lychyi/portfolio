/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PolymerElementsComponent } from './polymer-elements.component';

describe('PolymerElementsComponent', () => {
  let component: PolymerElementsComponent;
  let fixture: ComponentFixture<PolymerElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolymerElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolymerElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
