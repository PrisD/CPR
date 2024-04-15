import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HDRSkinBrachytherapyComponent } from './hdr-skin-brachytherapy.component';

describe('HDRSkinBrachytherapyComponent', () => {
  let component: HDRSkinBrachytherapyComponent;
  let fixture: ComponentFixture<HDRSkinBrachytherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HDRSkinBrachytherapyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HDRSkinBrachytherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
