import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindfulnessWorkshopComponent } from './mindfulness-workshop.component';

describe('MindfulnessWorkshopComponent', () => {
  let component: MindfulnessWorkshopComponent;
  let fixture: ComponentFixture<MindfulnessWorkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MindfulnessWorkshopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MindfulnessWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
