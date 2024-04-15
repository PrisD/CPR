import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IMRTIntensityModulatedRadiotherapyWithMultileafComponent } from './imrt-intensity-modulated-radiotherapy-with-multileaf.component';

describe('IMRTIntensityModulatedRadiotherapyWithMultileafComponent', () => {
  let component: IMRTIntensityModulatedRadiotherapyWithMultileafComponent;
  let fixture: ComponentFixture<IMRTIntensityModulatedRadiotherapyWithMultileafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IMRTIntensityModulatedRadiotherapyWithMultileafComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IMRTIntensityModulatedRadiotherapyWithMultileafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
