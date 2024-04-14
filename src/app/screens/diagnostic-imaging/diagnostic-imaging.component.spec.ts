import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticImagingComponent } from './diagnostic-imaging.component';

describe('DiagnosticImagingComponent', () => {
  let component: DiagnosticImagingComponent;
  let fixture: ComponentFixture<DiagnosticImagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagnosticImagingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiagnosticImagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
