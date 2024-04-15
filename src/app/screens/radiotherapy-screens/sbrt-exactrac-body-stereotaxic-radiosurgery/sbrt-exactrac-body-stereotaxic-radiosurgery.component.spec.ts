import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SBRTExactracBodyStereotaxicRadiosurgeryComponent } from './sbrt-exactrac-body-stereotaxic-radiosurgery.component';

describe('SBRTExactracBodyStereotaxicRadiosurgeryComponent', () => {
  let component: SBRTExactracBodyStereotaxicRadiosurgeryComponent;
  let fixture: ComponentFixture<SBRTExactracBodyStereotaxicRadiosurgeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SBRTExactracBodyStereotaxicRadiosurgeryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SBRTExactracBodyStereotaxicRadiosurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
