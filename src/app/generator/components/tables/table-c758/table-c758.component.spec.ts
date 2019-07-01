import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableC758Component } from './table-c758.component';

describe('TableC758Component', () => {
  let component: TableC758Component;
  let fixture: ComponentFixture<TableC758Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableC758Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableC758Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
