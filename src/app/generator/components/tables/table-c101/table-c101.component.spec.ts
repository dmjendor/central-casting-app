import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableC101Component } from './table-c101.component';

describe('TableC101Component', () => {
  let component: TableC101Component;
  let fixture: ComponentFixture<TableC101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableC101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableC101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
