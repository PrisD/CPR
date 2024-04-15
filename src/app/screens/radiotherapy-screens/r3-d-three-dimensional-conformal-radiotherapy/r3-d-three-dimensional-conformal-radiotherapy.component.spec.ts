import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R3DThreeDimensionalConformalRadiotherapyComponent } from './r3-d-three-dimensional-conformal-radiotherapy.component';

describe('R3DThreeDimensionalConformalRadiotherapyComponent', () => {
  let component: R3DThreeDimensionalConformalRadiotherapyComponent;
  let fixture: ComponentFixture<R3DThreeDimensionalConformalRadiotherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [R3DThreeDimensionalConformalRadiotherapyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(R3DThreeDimensionalConformalRadiotherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
