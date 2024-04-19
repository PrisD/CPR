import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsMindfulnessComponent } from './what-is-mindfulness.component';

describe('WhatIsMindfulnessComponent', () => {
  let component: WhatIsMindfulnessComponent;
  let fixture: ComponentFixture<WhatIsMindfulnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatIsMindfulnessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatIsMindfulnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
