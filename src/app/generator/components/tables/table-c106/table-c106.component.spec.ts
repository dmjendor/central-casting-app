import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableC106Component } from './table-c106.component';

describe('TableC106Component', () => {
  let component: TableC106Component;
  let fixture: ComponentFixture<TableC106Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableC106Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableC106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
