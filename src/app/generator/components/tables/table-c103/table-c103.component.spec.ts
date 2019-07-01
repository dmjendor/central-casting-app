import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableC103Component } from './table-c103.component';

describe('TableC103Component', () => {
  let component: TableC103Component;
  let fixture: ComponentFixture<TableC103Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableC103Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableC103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
