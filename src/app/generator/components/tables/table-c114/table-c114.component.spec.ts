import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableC114Component } from './table-c114.component';

describe('TableC114Component', () => {
  let component: TableC114Component;
  let fixture: ComponentFixture<TableC114Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableC114Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableC114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
