import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridarcVolumetricDynamicTherapyComponent } from './hybridarc-volumetric-dynamic-therapy.component';

describe('HybridarcVolumetricDynamicTherapyComponent', () => {
  let component: HybridarcVolumetricDynamicTherapyComponent;
  let fixture: ComponentFixture<HybridarcVolumetricDynamicTherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HybridarcVolumetricDynamicTherapyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HybridarcVolumetricDynamicTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
