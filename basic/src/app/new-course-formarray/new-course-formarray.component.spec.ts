import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseFormarrayComponent } from './new-course-formarray.component';

describe('NewCourseFormarrayComponent', () => {
  let component: NewCourseFormarrayComponent;
  let fixture: ComponentFixture<NewCourseFormarrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCourseFormarrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCourseFormarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
