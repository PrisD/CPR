import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntracavitaryGynecologicalHDRBrachytherapyComponent } from './intracavitary-gynecological-hdr-brachytherapy.component';

describe('IntracavitaryGynecologicalHDRBrachytherapyComponent', () => {
  let component: IntracavitaryGynecologicalHDRBrachytherapyComponent;
  let fixture: ComponentFixture<IntracavitaryGynecologicalHDRBrachytherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntracavitaryGynecologicalHDRBrachytherapyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntracavitaryGynecologicalHDRBrachytherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
