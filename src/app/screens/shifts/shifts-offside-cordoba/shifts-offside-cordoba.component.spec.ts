import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftsOffsideCordobaComponent } from './shifts-offside-cordoba.component';

describe('ShiftsPsychologyComponent', () => {
  let component: ShiftsOffsideCordobaComponent;
  let fixture: ComponentFixture<ShiftsOffsideCordobaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShiftsOffsideCordobaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftsOffsideCordobaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
