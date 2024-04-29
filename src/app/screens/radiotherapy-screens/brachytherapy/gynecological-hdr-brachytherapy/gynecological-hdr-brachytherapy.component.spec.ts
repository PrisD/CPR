import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GynecologicalHDRBrachytherapyComponent } from './gynecological-hdr-brachytherapy.component';

describe('GynecologicalHDRBrachytherapyComponent', () => {
  let component: GynecologicalHDRBrachytherapyComponent;
  let fixture: ComponentFixture<GynecologicalHDRBrachytherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GynecologicalHDRBrachytherapyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GynecologicalHDRBrachytherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
