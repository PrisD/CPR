import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiotherapyComponent } from './radiotherapy.component';

describe('RadiotherapyComponent', () => {
  let component: RadiotherapyComponent;
  let fixture: ComponentFixture<RadiotherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadiotherapyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadiotherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
