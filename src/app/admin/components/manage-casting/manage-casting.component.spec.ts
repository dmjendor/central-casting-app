import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCastingComponent } from './manage-casting.component';


describe('ManageCastingComponent', () => {
  let component: ManageCastingComponent;
  let fixture: ComponentFixture<ManageCastingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCastingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
