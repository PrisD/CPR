import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftsOptionsComponent } from './shifts-options.component';

describe('ShiftsOptionsComponent', () => {
  let component: ShiftsOptionsComponent;
  let fixture: ComponentFixture<ShiftsOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShiftsOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShiftsOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
