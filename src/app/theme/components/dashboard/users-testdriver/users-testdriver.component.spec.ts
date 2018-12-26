import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTestdriverComponent } from './users-testdriver.component';

describe('UsersTestdriverComponent', () => {
  let component: UsersTestdriverComponent;
  let fixture: ComponentFixture<UsersTestdriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersTestdriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTestdriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
