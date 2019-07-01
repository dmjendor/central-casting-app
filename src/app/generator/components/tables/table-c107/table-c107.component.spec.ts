import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableC107Component } from './table-c107.component';

describe('TableC107Component', () => {
  let component: TableC107Component;
  let fixture: ComponentFixture<TableC107Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableC107Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableC107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
