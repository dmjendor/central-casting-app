import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableC108Component } from './table-c108.component';

describe('TableC108Component', () => {
  let component: TableC108Component;
  let fixture: ComponentFixture<TableC108Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableC108Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableC108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
