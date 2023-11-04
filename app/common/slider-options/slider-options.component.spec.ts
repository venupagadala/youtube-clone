import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderOptionsComponent } from './slider-options.component';

describe('SliderOptionsComponent', () => {
  let component: SliderOptionsComponent;
  let fixture: ComponentFixture<SliderOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderOptionsComponent]
    });
    fixture = TestBed.createComponent(SliderOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
