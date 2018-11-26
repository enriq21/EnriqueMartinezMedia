import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenezuelaComponent } from './venezuela.component';

describe('VenezuelaComponent', () => {
  let component: VenezuelaComponent;
  let fixture: ComponentFixture<VenezuelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenezuelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenezuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
