import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableC102Component } from './table-c102.component';

describe('TableC102Component', () => {
  let component: TableC102Component;
  let fixture: ComponentFixture<TableC102Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableC102Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableC102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
