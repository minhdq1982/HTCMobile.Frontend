import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembercardInfoComponent } from './membercard-info.component';

describe('MembercardInfoComponent', () => {
  let component: MembercardInfoComponent;
  let fixture: ComponentFixture<MembercardInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembercardInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembercardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
