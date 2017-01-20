/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PassowordResetComponent } from './password-reset.component';

describe('PassowordResetComponent', () => {
  let component: PassowordResetComponent;
  let fixture: ComponentFixture<PassowordResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassowordResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassowordResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
