import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychoOncologyComponent } from './psycho-oncology.component';

describe('PsychoOncologyComponent', () => {
  let component: PsychoOncologyComponent;
  let fixture: ComponentFixture<PsychoOncologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsychoOncologyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PsychoOncologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
