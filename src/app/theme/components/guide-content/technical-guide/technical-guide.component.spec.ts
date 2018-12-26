import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalGuideComponent } from './technical-guide.component';

describe('TechnicalGuideComponent', () => {
  let component: TechnicalGuideComponent;
  let fixture: ComponentFixture<TechnicalGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
