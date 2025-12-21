import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftsInsideCordobaComponent } from './shifts-inside-cordoba.component';

describe('ShiftsStartRadiotherapyComponent', () => {
  let component: ShiftsInsideCordobaComponent;
  let fixture: ComponentFixture<ShiftsInsideCordobaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShiftsInsideCordobaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftsInsideCordobaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
