import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftsDiagnosisByImagingComponent } from './shifts-diagnosis-by-imaging.component';

describe('ShiftsDiagnosisByImagingComponent', () => {
  let component: ShiftsDiagnosisByImagingComponent;
  let fixture: ComponentFixture<ShiftsDiagnosisByImagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShiftsDiagnosisByImagingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShiftsDiagnosisByImagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
