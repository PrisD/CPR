import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HDRProstateBrachytherapyComponent } from './hdr-prostate-brachytherapy.component';

describe('HDRProstateBrachytherapyComponent', () => {
  let component: HDRProstateBrachytherapyComponent;
  let fixture: ComponentFixture<HDRProstateBrachytherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HDRProstateBrachytherapyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HDRProstateBrachytherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
