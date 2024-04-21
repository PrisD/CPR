import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftsPsychologyComponent } from './shifts-psychology.component';

describe('ShiftsPsychologyComponent', () => {
  let component: ShiftsPsychologyComponent;
  let fixture: ComponentFixture<ShiftsPsychologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShiftsPsychologyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShiftsPsychologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
