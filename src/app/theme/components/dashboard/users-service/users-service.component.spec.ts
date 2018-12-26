import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersServiceComponent } from './users-service.component';

describe('UsersServiceComponent', () => {
  let component: UsersServiceComponent;
  let fixture: ComponentFixture<UsersServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
