/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CustomThComponent } from './custom-th.component';

describe('CustomThComponent', () => {
  let component: CustomThComponent;
  let fixture: ComponentFixture<CustomThComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomThComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomThComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
