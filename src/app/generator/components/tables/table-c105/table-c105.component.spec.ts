import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableC105Component } from './table-c105.component';

describe('TableC105Component', () => {
  let component: TableC105Component;
  let fixture: ComponentFixture<TableC105Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableC105Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableC105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
