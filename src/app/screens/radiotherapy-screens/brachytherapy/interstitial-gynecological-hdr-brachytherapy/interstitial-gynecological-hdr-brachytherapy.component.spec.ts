import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterstitialGynecologicalHDRBrachytherapyComponent } from './interstitial-gynecological-hdr-brachytherapy.component';

describe('InterstitialGynecologicalHDRBrachytherapyComponent', () => {
  let component: InterstitialGynecologicalHDRBrachytherapyComponent;
  let fixture: ComponentFixture<InterstitialGynecologicalHDRBrachytherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterstitialGynecologicalHDRBrachytherapyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterstitialGynecologicalHDRBrachytherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
