import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalPsychologyComponent } from './clinical-psychology.component';

describe('ClinicalPsychologyComponent', () => {
  let component: ClinicalPsychologyComponent;
  let fixture: ComponentFixture<ClinicalPsychologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicalPsychologyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClinicalPsychologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
