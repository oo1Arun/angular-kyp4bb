import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashSectionSecondComponent } from './dash-section-second.component';

describe('DashSectionSecondComponent', () => {
  let component: DashSectionSecondComponent;
  let fixture: ComponentFixture<DashSectionSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashSectionSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashSectionSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
