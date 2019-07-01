import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableC110Component } from './table-c110.component';

describe('TableC110Component', () => {
  let component: TableC110Component;
  let fixture: ComponentFixture<TableC110Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableC110Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableC110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
