import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastingFormComponent } from './casting-form.component';

describe('CastingFormComponent', () => {
  let component: CastingFormComponent;
  let fixture: ComponentFixture<CastingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
