import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableC109Component } from './table-c109.component';

describe('TableC109Component', () => {
  let component: TableC109Component;
  let fixture: ComponentFixture<TableC109Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableC109Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableC109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
