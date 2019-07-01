import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableC112Component } from './table-c112.component';

describe('TableC112Component', () => {
  let component: TableC112Component;
  let fixture: ComponentFixture<TableC112Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableC112Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableC112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
