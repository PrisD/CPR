import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IGRTExactracBrainlabImageGuidedRadiotherapyComponent } from './igrt-exactrac-brainlab-image-guided-radiotherapy.component';

describe('IGRTExactracBrainlabImageGuidedRadiotherapyComponent', () => {
  let component: IGRTExactracBrainlabImageGuidedRadiotherapyComponent;
  let fixture: ComponentFixture<IGRTExactracBrainlabImageGuidedRadiotherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IGRTExactracBrainlabImageGuidedRadiotherapyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IGRTExactracBrainlabImageGuidedRadiotherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
