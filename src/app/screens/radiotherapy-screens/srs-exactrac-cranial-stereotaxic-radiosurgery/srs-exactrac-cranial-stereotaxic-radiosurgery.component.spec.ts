import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SRSExactracCranialStereotaxicRadiosurgeryComponent } from './srs-exactrac-cranial-stereotaxic-radiosurgery.component';

describe('SRSExactracCranialStereotaxicRadiosurgeryComponent', () => {
  let component: SRSExactracCranialStereotaxicRadiosurgeryComponent;
  let fixture: ComponentFixture<SRSExactracCranialStereotaxicRadiosurgeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SRSExactracCranialStereotaxicRadiosurgeryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SRSExactracCranialStereotaxicRadiosurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
