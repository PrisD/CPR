import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkDisplayComponent } from './ok-display.component';

describe('OkDisplayComponent', () => {
  let component: OkDisplayComponent;
  let fixture: ComponentFixture<OkDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OkDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OkDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
