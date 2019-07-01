import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableC104Component } from './table-c104.component';

describe('TableC104Component', () => {
  let component: TableC104Component;
  let fixture: ComponentFixture<TableC104Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableC104Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableC104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
