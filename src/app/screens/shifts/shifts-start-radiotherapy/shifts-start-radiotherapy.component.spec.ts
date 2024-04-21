import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftsStartRadiotherapyComponent } from './shifts-start-radiotherapy.component';

describe('ShiftsStartRadiotherapyComponent', () => {
  let component: ShiftsStartRadiotherapyComponent;
  let fixture: ComponentFixture<ShiftsStartRadiotherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShiftsStartRadiotherapyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShiftsStartRadiotherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
