import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSurveyComponent } from './users-survey.component';

describe('UsersSurveyComponent', () => {
  let component: UsersSurveyComponent;
  let fixture: ComponentFixture<UsersSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
