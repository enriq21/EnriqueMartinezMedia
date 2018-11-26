import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaComponent } from './india.component';

describe('CaseStudyComponent', () => {
  let component: IndiaComponent;
  let fixture: ComponentFixture<IndiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
